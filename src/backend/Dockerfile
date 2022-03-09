FROM php:8.1-fpm-alpine as backend

# import extension installer
COPY --from=mlocati/php-extension-installer /usr/bin/install-php-extensions /usr/bin/

# install extensions
RUN install-php-extensions pdo_mysql bcmath opcache redis

# install composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

# configure php
COPY .docker/php.ini $PHP_INI_DIR/conf.d/opcache.ini

# use the default development configuration
RUN mv $PHP_INI_DIR/php.ini-development $PHP_INI_DIR/php.ini

# install bash
RUN apk --no-cache add bash mysql-client mariadb-connector-c-dev

# create user based on provided user id
ARG HOST_UID
RUN adduser --disabled-password --gecos "" --uid $HOST_UID demo

# switch to user
USER demo

FROM backend as worker

# start worker
CMD ["php", "/var/www/backend/artisan", "queue:work"]

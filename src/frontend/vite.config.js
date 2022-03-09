import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    server: {
        host: true,
        hmr: { port: 443 },
        port: 8080,
        watch: {
            usePolling: true,
        },
    },
});

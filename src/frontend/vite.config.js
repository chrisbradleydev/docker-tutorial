import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    server: {
        host: true,
        hmr: { port: 80 },
        port: 8080,
        watch: {
            usePolling: true,
        },
    },
});

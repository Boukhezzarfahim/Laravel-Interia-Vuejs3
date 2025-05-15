import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from "@vitejs/plugin-vue";
import ziggy from 'vite-plugin-ziggy';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: [ 'resources/js/app.js'],
            refresh: true,
        }),
        vue(),
        ziggy()
    ],
    resolve: {
        alias: {
            $: 'jquery',
            jquery: 'jquery',
           'ziggy': path.resolve('vendor/tightenco/ziggy/dist') 

        },
    },
});


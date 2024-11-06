import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react';
import {resolve} from 'path';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        }
    },
    plugins: [
        react({
            include: "**/*.jsx"
        }),
        svgr()
    ]
})

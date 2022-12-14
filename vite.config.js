import { defineConfig } from "vite";
import postcssNested from 'postcss-nested'

export default defineConfig({
    root:'src',
    publicDir:'../public',
    css:{
        postcss:{
            plugins:[
                postcssNested
            ]
        },
    },
    base:'/Blackjack/',
    build:{
        sourcemap: true,
        outDir:'../dist',
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split('.').at(1);
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = 'images';
                    }
                    return `assets/${extType}/[name].[hash][extname]`;
                },
                chunkFileNames: 'assets/js/[name].[hash].js',
                entryFileNames: 'assets/js/[name].[hash].js',
            },
        },
    }
})
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
export default [
    {
        input: 'src/scripts/index.js',
        output: {
            file: 'public/js/main.js',
            format: 'iife'
        },
        plugins: [
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'bundled'
            }),
            commonjs(),
            resolve({
                browser: true,
            }),
        ]
    }, {
        input: 'src/scripts/about.js',
        output: {
            file: 'public/js/about.js',
            format: 'iife'
        },
        plugins: [
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'bundled'
            }),
            commonjs(),
            resolve({
                browser: true
            })
        ]
    }
];
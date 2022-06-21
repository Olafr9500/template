import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

const rollupConfig = [
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
            })
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
// eslint-disable-next-line no-undef
if (process.env.production === 'true') {
    rollupConfig.forEach(config => {
        config.plugins.push(terser());
    });
}
export default rollupConfig;
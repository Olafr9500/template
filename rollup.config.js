import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import fs from 'fs';

const scriptsFolder = 'src/scripts/';
const rollupConfig = [];
fs.readdirSync(scriptsFolder).forEach(file => {
    if (file.endsWith('.js')) {
        const name = file.replace('.js', '');
        rollupConfig.push({
            input: `${scriptsFolder}${name}.js`,
            output: {
                file: `public/js/${name}.js`,
                format: 'iife',
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
        });
    }
});
// eslint-disable-next-line no-undef
if (process.env.production === 'true') {
    rollupConfig.forEach(config => {
        config.plugins.push(terser());
    });
}
export default rollupConfig;
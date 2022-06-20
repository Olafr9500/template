import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
export default [
    {
        input: 'src/index.js',
        output: {
            file: 'js/main.js',
            format: 'iife'
        },
        plugins: [
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'bundled'
            }),
            replace({
                values : {
                    'process.env.NODE_ENV': JSON.stringify('production'),
                    '// eslint-disable-next-line import/no-unused-modules': '',
                    'offsetParent = offsetParent;': ''
                },
                delimiters: ['', ''],
                preventAssignment: true
            }),
            nodeResolve()
        ]
    }
];
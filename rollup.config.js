import nodeResolve from '@rollup/plugin-node-resolve';
export default [
    {
        input: 'src/index.js',
        output: {
            file: 'js/main.js',
            format: 'iife',
        },
        plugins: [nodeResolve()]
    }
];
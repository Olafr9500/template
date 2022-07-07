/* eslint-env node */
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

module.exports = {
    plugins: [
        autoprefixer(),
        purgecss({
            content: ['./public/**/*.html', './public/**/*.js'],
            css: ['./public/css/*.css'],
            skippedContentGlobs: ['./node_modules/**', './public/fonts/**']
        }),
        cssnano({
            preset: 'default',
        })
    ]
};
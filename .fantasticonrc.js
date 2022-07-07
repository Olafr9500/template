/* eslint-env node */
'use strict'
const codepoints = require('bootstrap-icons/font/bootstrap-icons.json')

module.exports = {
    inputDir: './node_modules/bootstrap-icons//icons', // (required)
    outputDir: './public', // (required)
    fontTypes: ['woff2', 'woff'],
    assetTypes: ['css'],
    name: 'bootstrap-icons',
    codepoints,
    prefix: 'bi',
    selector: '.bi',
    fontsUrl: '../fonts',
    formatOptions: {
        json: {
            indent: 2
        }
    },
    pathOptions: {
        woff: './public/fonts/bootstrap-icons.woff',
        woff2: './public/fonts/bootstrap-icons.woff2',
        css: './public/css/bootstrap-icons.css'
    }
};
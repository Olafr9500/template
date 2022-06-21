/* eslint-env node */
module.exports = {
    globDirectory: 'public/',
    globPatterns: [
        '**/*.{css,woff,woff2,ico,js,html}'
    ],
    swDest: 'public/sw.js',
    ignoreURLParametersMatching: [
        /^utm_/,
        /^fbclid$/
    ]
};
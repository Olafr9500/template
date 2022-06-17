/* eslint-env node */
const watch = require('watch');
const generateFonts = require('fantasticon').generateFonts;
const fs = require('fs');
const configuration = require('./.fantasticonrc.js');


const regexFileFonts = [
    '.*\\.svg',
    '.*\\.html',
    '.*\\.php',
    '\\.fantasticonrc\\.js'
];

console.clear();
console.log('Walking the tree');

watch.watchTree('.', {
    ignoreDirectoryPattern: /(fonts\/.*\..*)|(css\/.*\..*)/gm
}, function (f, curr, prev) {
    if (typeof f == 'object' && prev === null && curr === null) {
        console.log('Watching for changes...');
    } else if (typeof f === 'string') {
        let regexValue = new RegExp(regexFileFonts.join('|'), 'gm');
        if (f.match(regexValue)) {
            console.log('File ' + f + ' was ' + (curr.nlink === 0 ? 'remove' : (prev ? 'updated' : 'added')));
            console.log('Updating fonts');
            generateFonts(configuration).then(results => {
                console.log('Fonts updated');
                if (!fs.existsSync('./logs/fantasticon')) {
                    fs.mkdirSync('./logs/fantasticon');
                }
                fs.writeFileSync('./logs/fantasticon/options.json', JSON.stringify(results.options, null, 2));
                fs.writeFileSync('./logs/fantasticon/assertsIn.json', JSON.stringify(results.assetsIn, null, 2));
                fs.writeFileSync('./logs/fantasticon/assertsOut.json', JSON.stringify(results.assetsOut, null, 2));
                fs.writeFileSync('./logs/fantasticon/writeResults.json', JSON.stringify(results.writeResults, null, 2));
                fs.writeFileSync('./logs/fantasticon/codepoints.json', JSON.stringify(results.codepoints, null, 2));
            });
        }
    }
});
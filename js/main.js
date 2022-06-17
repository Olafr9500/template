(function () {
    'use strict';

    /**
     * List des requêtes en cours
     */

    /**
     * Fonction retournant un HTMLElement via son id
     * @param {string} selector Id de l'élément
     * @returns {HTMLElement}
     */
    function docId(selector) {
        return document.getElementById(selector);
    }

    class json {
        static read(file, callback) {
            let rawFile = new XMLHttpRequest();
            rawFile.overrideMimeType('application/json');
            rawFile.open('GET', file, true);
            rawFile.onreadystatechange = () => {
                if (rawFile.readyState === 4 && rawFile.status == '200') {
                    callback(rawFile.responseText);
                }
            };
            rawFile.send(null);
        }
    }

    window.addEventListener('load', () => {
        console.log('Loaded');

        json.read('package.json', response => {
            let packageJson = JSON.parse(response);
            for (const [key, value] of Object.entries(packageJson.devDependencies)) {
                docId('listDependencies').innerHTML += `<li>${key} : ${value}</li>`;
            }
        });
    });

})();

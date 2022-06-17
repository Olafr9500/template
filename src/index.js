import { docId, json } from '@olafr/modulejs';
window.addEventListener('load', () => {
    console.log('Loaded');

    json.read('package.json', response => {
        let packageJson = JSON.parse(response);
        for (const [key, value] of Object.entries(packageJson.devDependencies)) {
            docId('listDependencies').innerHTML += `<li>${key} : ${value}</li>`;
        }
    });
});
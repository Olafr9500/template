import Modal from 'bootstrap/js/dist/modal';
import { docId, json } from '@olafr/modulejs';
import callSW from './modules/sw';
import setupHeader from './modules/header';
window.addEventListener('load', () => {
    console.log('Loaded');
    callSW();
    setupHeader();
    const modalTest = new Modal(docId('testModal'), {
        backdrop: true,
        keyboard: true,
        focus: true,
    });

    docId('openModal').addEventListener('click', () => {
        modalTest.show();
    });

    json.read('package.json', response => {
        let packageJson = JSON.parse(response);
        for (const [key, value] of Object.entries(packageJson)) {
            docId('listDependencies').innerHTML += `<li>${key} : ${value}</li>`;
        }
    });
});
import Modal from 'bootstrap/js/dist/modal';
import Collapse from 'bootstrap/js/dist/collapse';
import { docId, docQAll, json } from '@olafr/modulejs';
import callSW from './sw';
// import { Collapse, Modal } from 'bootstrap';
window.addEventListener('load', () => {
    console.log('Loaded');
    callSW();
    const modalTest = new Modal(docId('testModal'), {
        backdrop: true,
        keyboard: true,
        focus: true,
    });

    let collapseElementList = [].slice.call(docQAll('.collapse')),
        collapseList = collapseElementList.map(function (collapseEl) {
            return new Collapse(collapseEl, {
                toggle: false
            });
        });

    collapseElementList.forEach(collapseEl => {
        collapseEl.addEventListener('click', () => {
            collapseList.forEach(collapse => {
                if (collapse === collapseEl) {
                    collapse.toggle();
                }
            });
        });
    });

    docId('openModal').addEventListener('click', () => {
        modalTest.show();
    });

    json.read('package.json', response => {
        let packageJson = JSON.parse(response);
        for (const [key, value] of Object.entries(packageJson.devDependencies)) {
            docId('listDependencies').innerHTML += `<li>${key} : ${value}</li>`;
        }
    });
});
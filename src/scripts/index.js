import Modal from 'bootstrap/js/dist/modal';
import Collapse from 'bootstrap/js/dist/collapse';
import { docId, docQ, docQAll, json } from '@olafr/modulejs';
// import { Collapse, Modal } from 'bootstrap';
window.addEventListener('load', () => {
    console.log('Loaded');

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

    docQ('nav form').addEventListener('submit', e => {
        e.preventDefault();
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
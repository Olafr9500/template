import { docQAll } from '@olafr/modulejs';
import Collapse from 'bootstrap/js/dist/collapse';
import callSW from './sw';
window.addEventListener('load', () => {
    console.log('Loaded');
    callSW();

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
});
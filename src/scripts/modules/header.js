import { docQAll } from '@olafr/modulejs';
import Collapse from 'bootstrap/js/dist/collapse';

function setupHeader() {
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
}

export default setupHeader;
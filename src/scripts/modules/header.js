import { docQ, docQAll } from '@olafr/modulejs';
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

    docQ('.navbar form').addEventListener('submit', e => {
        e.preventDefault();
        let search = docQ('.navbar form input').value;
        console.log(`${search}`);
    });
}

export default setupHeader;
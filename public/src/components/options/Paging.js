import Component from '../Component.js';
import hashStorage from '../../services/hash-storage.js';

class Paging extends Component {

    onRender(dom) {
        const backButton = dom.querySelector('#back-button');
        const nextButton = dom.querySelector('#next-button');

        if(!backButton) {
            return;
        }

        const currentPage = this.props.currentPage || 1;

        function updatePage(increment) {
            hashStorage.set({ page: currentPage + increment });
        }

        backButton.addEventListener('click', () => {
            updatePage(-1);
        });

        nextButton.addEventListener('click', () => {
            updatePage(1);
        });
    }

    renderHTML() {
        const currentPage = this.props.currentPage || 1;
        const perPage = 20;
        const totalCount = this.props.totalCount;

        if(!totalCount) {
            return /*html*/`
            <p class="paging">You found no results, try another search!</p>
            `;
        }
    
        const lastPage = Math.ceil(totalCount / perPage);

        return /*html*/`
        <p class="paging">
            <button class="button" id="back-button">last page</button>
            <span>Page ${currentPage} of ${lastPage}</span>
            <button class="button" id="next-button">next page</button>
        </p>
        `;
    }
}

export default Paging;
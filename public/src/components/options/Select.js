import Component from '../Component.js';

class Select extends Component {
    renderHTML() {
        return /*html*/`
            <div id="select-section">
                <h2>Sort:</h2> 
                <select id="sort-select"></select>
            </div>
        `;
    }
}

export default Select;
import Component from '../Component.js';

class Input extends Component {
    renderHTML() {
        return /*html*/`
            <div id="input-section">
                <h2>Search:</h2>
                <input id="search-input">
            </div>
        `;
    }
}

export default Input;
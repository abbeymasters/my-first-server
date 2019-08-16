import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header class="header">
                <h1>pokedex</h1>
                <img src="./assets/chansey.png">
            </header>
        `;
    }
}

export default Header;
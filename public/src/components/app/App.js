import Component from '../Component.js';
import Header from '../app/Header.js';
import Select from '../options/Select.js';
import PokeList from '../pokedex/PokeList.js';
import Input from '../options/Input.js';

class App extends Component {
    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const select = new Select();
        const selectDOM = select.renderDOM();
        const selectSection = dom.querySelector('.sidebar');
        selectSection.appendChild(selectDOM);

        const input = new Input();
        const inputDOM = input.renderDOM();
        selectSection.appendChild(inputDOM);

        const url = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let pokeList = new PokeList({ poke: data });
                let pokeListDOM = pokeList.renderDOM();
                const contentSection = dom.querySelector('.content');
                contentSection.appendChild(pokeListDOM);
            });
    }

    renderHTML() {
        return /*html*/`
            <div id="root">
                <main class="wrapper">
                    

                    <section class="sidebar">
                    </section>
                    
                    <section class="content"></section>

                    <section class="image-section">
                        <img class="gif" src="assets/GrayBountifulBlackpanther-small.gif">
                    </section>
                    
                    <section class="button-section">
                        <button class="button" id="next-button">next page</button>
                        <button class="button" id="back-button">last page</button>
                    </section>
                </main>
                <footer>
                    <p>made by abbey</p>
                </footer>
            </div>
        `;
    }
}

export default App;
import Component from '../Component.js';
import Header from '../app/Header.js';
import Select from '../options/Select.js';
import PokeList from '../pokedex/PokeList.js';
import { getPokemon } from '../../services/pokedex-api.js';
import Input from '../options/Input.js';
import hashStorage from '../../services/hash-storage.js';
import Paging from '../options/Paging.js';

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

        const paging = new Paging();
        const buttonSection = dom.querySelector('.button-section');
        buttonSection.appendChild(paging.renderDOM());
        
        const pokeList = new PokeList({ poke: [] });
        const contentSection = dom.querySelector('.content');
        contentSection.appendChild(pokeList.renderDOM());

        function loadPokemon() {
            const options = hashStorage.get();
            getPokemon(options)
                .then(data => {
                    const poke = data.results;
                    const totalCount = data.count;

                    pokeList.update({ poke: poke });
                    paging.update({
                        totalCount: totalCount,
                        currentPage: +options.page
                    });
                });
        }
        
        loadPokemon();

        window.addEventListener('hashchange', () => {
            loadPokemon();
        });
    }


    renderHTML() {
        return /*html*/`
            <div id="root">
                <main class="wrapper">
                    
                    <section class="sidebar"></section>
                    
                    <section class="content"></section>

                    <section class="image-section"><img class="gif" src="assets/GrayBountifulBlackpanther-small.gif"></section>
                    
                    <section class="button-section"></section>

                </main>
                
                <footer><p>made by abbey</p></footer>
                
            </div>
        `;
    }
}

export default App;
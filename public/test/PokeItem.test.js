import PokeItem from '../src/components/pokedex/PokeItems.js';

const test = QUnit.test;

QUnit.module('Pokedex');

test('Render a pokemon', assert => {
    // arrange
    const poke = {
        pokemon: 'chansey',
        type_1: 'normal',
        id: 3,
        attack: 5,
        url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png',
    };

    const expected = /*html*/`
            <li>
                <h2>chansey</h2>
                <img id="3" src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png">
                <p>Type: normal</p>
                <p>Attack: 5</p>
            </li>
        `;

    // act
    const props = { poke: poke };
    const pokeItem = new PokeItem(props);
    const html = pokeItem.renderHTML();
    
    // assert
    assert.equal(html, expected);
});
var lstPokemons = [];

const pokemonContainer = document.querySelector('.pokemon-container');

function fecthPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(data => createPokemon(data))
}

function addPokemonsToList(number) {
    for (let index = 1; index <= number; index++) {
        lstPokemons.push(fecthPokemon(index));
    }
}

lstPokemons.sort(function (a, b) {
    if (a.id > b.id) {
        return 1;
    }
    if (a.id < b.id) {
        return -1;
    }
    // a must be equal to b
    return 0;
});


addPokemonsToList(150);
console.log(lstPokemons);
lstPokemons.forEach(pokemon => {
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(5, 0)}`;

    const nombre = document.createElement('p');
    nombre.classList.add('name');
    nombre.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(nombre);

    pokemonContainer.appendChild(card);
});

function fetchPokemons(number) {
    for (let index = 1; index <= number; index++) {
        fecthPokemon(index);
    }
}

function createPokemon(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(5, 0)}`;

    const nombre = document.createElement('p');
    nombre.classList.add('name');
    nombre.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(nombre);

    pokemonContainer.appendChild(card);
}


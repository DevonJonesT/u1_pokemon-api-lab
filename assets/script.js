const getPokemonImage = async (pokemonName) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).catch(() => null);
    return response.data.sprites.front_default
};

const button = document.querySelector('#btn');
const pokemonInput = document.querySelector('#searchBar');
const imageContainer = document.querySelector('#imgContainer');

button.addEventListener('click', async () => {
    const pokemonName = pokemonInput.value; 
    const pokemonImage = await getPokemonImage(pokemonName); 

    imageContainer.setAttribute('src', pokemonImage || ''); 
    imageContainer.setAttribute('alt', pokemonImage ? pokemonName : ''); 

    pokemonInput.value = ''; 
});







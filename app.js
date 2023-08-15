const fetchButton = document.getElementById('fetchButton');
const pokemonDataContainer = document.getElementById('pokemonData');

fetchButton.addEventListener('click', fetchPokemonData);

async function fetchPokemonData() {
  const randomPokemonId = Math.floor(Math.random() * 898) + 1; // There are 898 Pokémon in total
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    displayPokemonData(data);
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
  }
}

function displayPokemonData(data) {
  const pokemonName = data.name;
  const pokemonImage = data.sprites.front_default;
  const pokemonTypes = data.types.map(type => type.type.name).join(', ');
  const pokemonAbilities = data.abilities.map(ability => ability.ability.name).join(', ');

  const html = `
    <h2>${pokemonName}</h2>
    <img src="${pokemonImage}" alt="${pokemonName} "width=200px" height="200px">
    <p><strong>Type(s):</strong> ${pokemonTypes}</p>
    <p><strong>Abilities:</strong> ${pokemonAbilities}</p>
  `;

  pokemonDataContainer.innerHTML = html;
}

const BASE_API = "https://pokeapi.co/api/v2/pokemon/";

export async function getPokemon({ query }) {
  try {
    const response = await fetch(BASE_API + query.toLowerCase());
    const json = await response.json();
    const pokemon = {
      id: json.id,
      name: json.name,
      types: json.types,
      image: json.sprites.front_default,
      stats: json.stats,
    };
    return pokemon;
  } catch (error) {
    throw new Error("Error searching pokemon");
  }
}

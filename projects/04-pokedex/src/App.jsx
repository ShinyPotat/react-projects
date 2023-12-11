import { useState } from "react";
import "./App.css";
import { Pokemon } from "./components/Pokemon";
import { usePokemon } from "./hooks/usePokemon";

function App() {
  const [query, setQuery] = useState("");
  const { pokemon, updatePokemon, loading, error } = usePokemon(query);

  const handleSubmit = async (event) => {
    event.preventDefault();
    updatePokemon({ query });
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <header>
        <h1>Pokedex</h1>
        <form onSubmit={handleSubmit}>
          <input
            required
            onChange={handleChange}
            type="text"
            placeholder="Pikachu, Charizard, Vaporeon..."
          />
          <button>Search</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </header>
      <main>{loading ? "Loading..." : <Pokemon pokemon={pokemon} />}</main>
    </>
  );
}

export default App;

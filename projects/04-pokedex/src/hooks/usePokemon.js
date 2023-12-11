import { useState, useCallback } from "react";
import { getPokemon } from "../services/pokeAPI";
import { useRef } from "react";

export function usePokemon({ query }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const previousPokemon = useRef(query);

  const updatePokemon = useCallback(async ({ query }) => {
    if (query === previousPokemon.current) return;

    try {
      setLoading(true);
      previousPokemon.current = query;
      const newPokemon = await getPokemon({ query });
      setPokemon(newPokemon);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { pokemon, updatePokemon, loading, error };
}

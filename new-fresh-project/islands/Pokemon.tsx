import { useSignal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

export default function Pokemon() {
  const pokemonData = useSignal(null); 

  async function getPokemon() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      const json = await response.json();
      pokemonData.value = json; 
    } catch (err) {
      console.error("Error fetching Pokémon data:", err);
    }
  }

  return (
    <div class="flex flex-col gap-4 py-6">
      <Button
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={getPokemon}
      >
        Fetch Pokemon Data
      </Button>

      {pokemonData.value && (
        <div>
          <h1 class="text-2xl font-bold">
            Pokémon: {pokemonData.value.name ?? "Unknown"}
          </h1>
          <p class="text-lg">Height: {pokemonData.value.height}</p>
          <p class="text-lg">Weight: {pokemonData.value.weight}</p>
          <p class="text-lg">Base Experience: {pokemonData.value.base_experience}</p>
        </div>
      )}
    </div>
  );
}

import {PokemonResponseInterface} from "@/app/dashboard/pokemons/core/interfaces/Response/pokemonResponse.interface";
import {SimplePokemonInterface} from "@/app/dashboard/pokemons/core/interfaces/Locals/simplePokemon.interface";

export const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemonInterface[]> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    const data = await response.json() as PokemonResponseInterface
    if (!data || !data?.results) return [];
    return data.results.map(item => ({
        id: item.url.split('/').at(-2) ?? ''
        , name: item.name
    }));
}
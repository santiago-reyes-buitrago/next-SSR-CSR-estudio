import {
    PokemonResponseDataInterface
} from "@/app/dashboard/pokemons/core/interfaces/Response/pokemonResponseData.interface";

export const getPokemon = async (id: string): Promise<PokemonResponseDataInterface> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`,{cache: 'force-cache'})
    return await response.json() as PokemonResponseDataInterface
}
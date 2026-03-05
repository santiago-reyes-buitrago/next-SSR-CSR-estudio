import {
    PokemonResponseDataInterface
} from "@/app/dashboard/pokemons/core/interfaces/Response/pokemonResponseData.interface";
import {PokemonDetailsProps} from "@/app/dashboard/pokemon/core/interfaces/pokemon.interface";
import {PokemonResponseToPokemonDetail} from "@/app/dashboard/pokemon/core/mappers/PokemonResponseToPokemonDetail";

export const getPokemon = async (id: string): Promise<PokemonDetailsProps> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`,{cache: 'force-cache'})
    const data = await response.json() as PokemonResponseDataInterface
    return PokemonResponseToPokemonDetail(data);
}
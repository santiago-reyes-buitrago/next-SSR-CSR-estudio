import {
    PokemonResponseDataInterface
} from "@/app/dashboard/pokemons/core/interfaces/Response/pokemonResponseData.interface";
import Image from "next/image";
import {SimplePokemonInterface} from "@/app/dashboard/pokemons/core/interfaces/Locals/simplePokemon.interface";

type Props = SimplePokemonInterface

const getPokemon = async (id: string): Promise<PokemonResponseDataInterface> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    return await response.json() as PokemonResponseDataInterface
}

export const PokemonCard = async ({id,name}:Props) => {
    const pokemon = await getPokemon(id);
    const photo = pokemon.sprites.other?.dream_world.front_default ?? '';
    return (
        <>
            <Image src={photo} alt={name} width={100} height={100} />
            <p>{pokemon.name}</p>
        </>
    );
};

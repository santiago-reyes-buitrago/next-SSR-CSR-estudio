import {PokemonCard} from "@/app/dashboard/pokemons/components/PokemonCard";
import {SimplePokemonInterface} from "@/app/dashboard/pokemons/core/interfaces/Locals/simplePokemon.interface";
import {cacheLife, cacheTag, revalidateTag} from "next/cache";

interface Props {
    pokemons: SimplePokemonInterface[]
}

export const PokemonGrid = async ({pokemons}: Props) => {
    'use cache'

    // cacheTag('pokemons')
    cacheLife({
        stale: 5,
        revalidate: 10,
        // expire: 86400
    })
    // revalidateTag('pokemons','max')
    return (
        <>
            <div className="flex flex-wrap gap-10 items-center justify-center">
                {pokemons.map((pokemon) => <PokemonCard key={pokemon.id} {...pokemon}/>)}
            </div>
        </>
    );
};



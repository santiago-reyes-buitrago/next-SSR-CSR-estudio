import {PokemonCard} from "@/app/dashboard/pokemons/components/PokemonCard";
import {SimplePokemonInterface} from "@/app/dashboard/pokemons/core/interfaces/Locals/simplePokemon.interface";

interface Props {
    pokemons: SimplePokemonInterface[]
}

export const PokemonGrid = ({pokemons}: Props) => {
    return (
        <>
            <div className="flex flex-wrap gap-10 items-center justify-center">
                {pokemons.map((pokemon) => <PokemonCard key={pokemon.id} {...pokemon}/>)}
            </div>
        </>
    );
};



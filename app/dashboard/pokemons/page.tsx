
import {PokemonGrid} from "@/app/dashboard/pokemons/components/PokemonGrid";
import {getPokemons} from "@/app/dashboard/pokemons/core/utils/GetPokemons.utils";




const PokemonPage = async () => {
    'use cache'
    const pokemons = await getPokemons(151);
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Listado de Pokemons <small>estatico</small></span>
            <PokemonGrid pokemons={pokemons}/>
        </div>
    );
};

export default PokemonPage;
import {getPokemon} from "@/app/dashboard/pokemon/core/utils/getPokemon.utils";
import {Metadata, ResolvingMetadata} from "next";
import MainPokemonCard from "@/app/dashboard/pokemon/components/MainPokemonCard";
import {getPokemons} from "@/app/dashboard/pokemons/core/utils/GetPokemons.utils";

interface Params {
    name: string
}

interface Props {
    params: Promise<Params>
}

export async function generateStaticParams(){
    const pokemons = await getPokemons(151);
    return pokemons.map(({name}) => ({name}))
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const { name } = await params
    const pokemon = await getPokemon(name);
    return {
        title: pokemon.name,
    }
}

const PokemonPage = async ({params}: Props) => {
    const {name} = await params;
    const pokemon = await getPokemon(name);
    return (
        <>
            <MainPokemonCard {...pokemon}/>
        </>
    );
};

export default PokemonPage;

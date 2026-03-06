import {getPokemon} from "@/app/dashboard/pokemon/core/utils/getPokemon.utils";
import {Metadata, ResolvingMetadata} from "next";
import MainPokemonCard from "@/app/dashboard/pokemon/components/MainPokemonCard";

interface Params {
    id: string
}

interface Props {
    params: Promise<Params>
}

export async function generateStaticParams(){
    return Array.from({length: 151}, (_, i) => ({id: `${i+1}`}))
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const { id } = await params
    const pokemon = await getPokemon(id);
    return {
        title: pokemon.name,
    }
}

const PokemonPage = async ({params}: Props) => {
    const {id} = await params;
    const pokemon = await getPokemon(id);
    return (
        <>
            <MainPokemonCard {...pokemon}/>
        </>
    );
};

export default PokemonPage;

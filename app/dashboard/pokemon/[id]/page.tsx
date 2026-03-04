import {getPokemon} from "@/app/dashboard/pokemon/core/utils/getPokemon.utils";
import Image from "next/image";
import {Metadata, ResolvingMetadata} from "next";

interface Params {
    id: string
}

interface Props {
    params: Promise<Params>
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { id } = await params
    const pokemon = await getPokemon(id);
    const photo = pokemon.sprites.other?.dream_world.front_default ?? '';

    return {
        title: pokemon.name,
        openGraph: {
            images: [photo],
        },
    }
}

const PokemonPage = async ({params}: Props) => {
    const {id} = await params;
    const pokemon = await getPokemon(id);
    const photo = pokemon.sprites.other?.dream_world.front_default ?? '';
    return (
        <>
            <div
                className="max-w-xs rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-full flex justify-end mb-2">
        <span className="text-gray-400 font-bold text-lg tracking-wider">
          #{pokemon.id}
        </span>
                </div>
                <div className="bg-gray-50 rounded-full p-4 mb-4">
                    <Image
                        className="w-32 h-32 object-contain drop-shadow-md"
                        src={photo}
                        alt={`Imagen de ${pokemon.name}`}
                        width={32}
                        height={32}
                    />
                </div>

                <div className="text-center w-full">
                    <h2 className="text-2xl font-extrabold text-gray-800 capitalize mb-3">
                        {pokemon.name}
                    </h2>

                    <div className="flex flex-wrap gap-2 justify-center">
                        {pokemon.types.map((type) => (
                            <span key={type.slot}
                                  className="px-4 py-1 bg-indigo-50 text-indigo-600 text-sm font-bold rounded-full capitalize border border-indigo-100">
                                {type.type.name}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
};

export default PokemonPage;

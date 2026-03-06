import Image from "next/image";
import {SimplePokemonInterface} from "@/app/dashboard/pokemons/core/interfaces/Locals/simplePokemon.interface";
import Link from "next/link";
import {IoHeartOutline} from "react-icons/io5";

type Props = SimplePokemonInterface

export const PokemonCard = async ({id, name}: Props) => {
    'use cache'
    const photo = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id ?? '0'}.svg`;

    return (
        <>
            <div className="mx-auto right-0 mt-2 w-60">
                <div className="bg-white rounded overflow-hidden shadow-lg">
                    <div className="text-center p-6 bg-gray-800 border-b">
                        <Image src={photo} className="h-24 w-24 text-white rounded-full mx-auto" alt={name}
                               width={32}
                               height={32}
                               priority={false}
                        />
                        <p className="capitalize pt-2 text-lg font-semibold text-gray-50">{name}</p>
                        <div className="mt-5">
                            <Link
                                href={`/dashboard/pokemons/${name}`}
                                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100
                                hover:bg-gray-100 hover:text-gray-800 focus:outline-none cursor-pointer "
                            >
                                Ver mas
                            </Link>
                        </div>
                    </div>
                    <div className="border-b">
                        <Link href="/account/campaigns" className="px-4 py-2 hover:bg-gray-100 flex">
                            <div className="text-green-600">
                                <IoHeartOutline/>
                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    No es favorito
                                </p>
                                <p className="text-xs text-gray-500">View your campaigns</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

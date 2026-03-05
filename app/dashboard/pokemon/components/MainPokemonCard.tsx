import React from "react";
import Image from "next/image";
import {PokemonDetailsProps} from "@/app/dashboard/pokemon/core/interfaces/pokemon.interface";
const MainPokemonCard: React.FC<PokemonDetailsProps> = ({
                                                            id,
                                                            name,
                                                            imageUrl,
                                                            types,
                                                            description,
                                                            height,
                                                            weight,
                                                            gender,
                                                            habitat,
                                                            stats,
                                                            abilities,
                                                            evolutions,
                                                        }) => {
    return (
        <div className="w-full max-w-7xl mx-auto p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 text-slate-800">

            <div
                className="bg-white rounded-4xl p-8 shadow-sm border border-slate-100 flex flex-col items-center col-span-1">
                <div className="w-full text-right mb-4">
          <span className="text-slate-400 font-bold text-2xl">
            #{id.toString().padStart(4, '0')}
          </span>
                </div>

                <div className="bg-slate-50 rounded-full w-64 h-64 flex items-center justify-center p-6 mb-8">
                    <Image
                        src={imageUrl}
                        alt={name}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain drop-shadow-xl"
                    />
                </div>

                <h1 className="text-4xl font-extrabold capitalize mb-4">{name}</h1>

                <div className="flex gap-2">
                    {types.map(type => (
                        <span key={type}
                              className="px-6 py-2 bg-indigo-50 text-indigo-500 font-semibold rounded-full capitalize">
              {type}
            </span>
                    ))}
                </div>
            </div>

            <div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Estadísticas Base */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 row-span-2">
                    <h3 className="text-xl font-bold mb-6">Base Stats</h3>
                    <div className="space-y-4">
                        {stats.map(stat => (
                            <div key={stat.name} className="flex items-center gap-4">
                                <span className="w-16 text-sm text-slate-500 font-medium">{stat.name}</span>
                                <div className="flex-1 bg-slate-100 rounded-full h-2.5">
                                    <div
                                        className={`h-2.5 rounded-full ${stat.color}`}
                                        style={{width: `${(stat.value / stat.max) * 100}%`}}
                                    ></div>
                                </div>
                                <span className="w-8 text-right font-bold text-sm">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Entrada de la Pokédex */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                    <h3 className="text-xl font-bold mb-4">Pokédex Entry</h3>
                    <p className="text-slate-600 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Habilidades */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                    <h3 className="text-xl font-bold mb-4">Abilities</h3>
                    <div className="space-y-4">
                        {abilities.map((ability, index) => (
                            <div key={index} className="flex gap-4">
                                <div
                                    className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 font-bold">
                                    {ability.isHidden ? 'H' : 'A'}
                                </div>
                                <div>
                                    <h4 className="font-bold capitalize">{ability.name} {ability.isHidden &&
                                        <span className="text-xs text-slate-400 font-normal">(Hidden)</span>}</h4>
                                    <p className="text-sm text-slate-600 mt-1">{ability.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cadena Evolutiva */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                    <h3 className="text-xl font-bold mb-4">Evolution Chain</h3>
                    <div className="flex items-center justify-between mt-6">
                        {evolutions.map((evo, index) => (
                            <React.Fragment key={evo.name}>
                                <div className="flex flex-col items-center">
                                    <div
                                        className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center p-2 mb-2">
                                        <Image src={evo.imageUrl} alt={evo.name}
                                               width={16}
                                               height={16}
                                               className="w-full h-full object-contain"/>
                                    </div>
                                    <span className="text-sm font-bold capitalize">{evo.name}</span>
                                    {evo.level && <span className="text-xs text-slate-400">Level {evo.level}</span>}
                                </div>
                                {index < evolutions.length - 1 && (
                                    <div className="text-slate-300 font-bold text-xl mb-6">→</div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Datos Generales */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                    <h3 className="text-xl font-bold mb-4">General Data</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <span className="text-sm text-slate-500 block mb-1">Height</span>
                            <span className="font-bold">{height}</span>
                        </div>
                        <div>
                            <span className="text-sm text-slate-500 block mb-1">Weight</span>
                            <span className="font-bold">{weight}</span>
                        </div>
                        <div>
                            <span className="text-sm text-slate-500 block mb-1">Gender</span>
                            <span className="font-bold text-blue-500">{gender}</span>
                        </div>
                        <div>
                            <span className="text-sm text-slate-500 block mb-1">Habitat</span>
                            <span className="font-bold capitalize">{habitat}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MainPokemonCard;

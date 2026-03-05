import {PokemonDetailsProps} from "@/app/dashboard/pokemon/core/interfaces/pokemon.interface";
import {
    PokemonResponseDataInterface
} from "@/app/dashboard/pokemons/core/interfaces/Response/pokemonResponseData.interface";

const colors = ['bg-red-500','bg-orange-400','bg-yellow-400','bg-blue-400','bg-green-400','bg-pink-400']

export const PokemonResponseToPokemonDetail = (pokemon: PokemonResponseDataInterface): PokemonDetailsProps => {
    return {
        id: pokemon.id,
        name: pokemon.name,
        imageUrl: pokemon.sprites.other?.dream_world.front_default ?? '',
        types: pokemon.types.map(item => item.type.name),
        description: '',
        height:`${pokemon.height}`,
        weight:`${pokemon.weight}`,
        gender:'',
        habitat:'',
        stats: pokemon.stats.map(({stat,base_stat},index) => ({
            name: stat.name,
            max: 100,
            value: base_stat,
            color: colors[index],
        })),
        abilities: pokemon.abilities.map(ability => ({
            name: ability.ability.name,
            description: ability.ability.url,
            isHidden: ability.is_hidden
        })),
        evolutions: []
    }
}
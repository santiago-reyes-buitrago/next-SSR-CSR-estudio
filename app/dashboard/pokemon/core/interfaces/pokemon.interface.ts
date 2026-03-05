export interface Stat {
    name: string;
    value: number;
    max: number;
    color: string;
}

export interface Ability {
    name: string;
    description: string;
    isHidden?: boolean;
}

export interface Evolution {
    name: string;
    imageUrl: string;
    level?: number;
}

export interface PokemonDetailsProps {
    id: number;
    name: string;
    imageUrl: string;
    types: string[];
    description: string;
    height: string;
    weight: string;
    gender: string;
    habitat: string;
    stats: Stat[];
    abilities: Ability[];
    evolutions: Evolution[];
}
interface IPokemonList {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
}

interface IPokemonItem {
  id: string;
  name: string;
  height: number;
  weight: number;
  stats: IPokemonStats[];
  types: IPokemonType[];
  sprites: {
    front_default: string;
    other: { "official-artwork": { front_default: string } };
  };
  abilities: {
    ability: { name: string };
  }[];
  desc?: string;
}

interface IPokemonStats {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  };
}
interface IPokemonType {
  slot: number;
  type: {
    name: string;
  };
}

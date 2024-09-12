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
  stats: {
    base_stat: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
  sprites: {
    front_default: string;
  };
  desc?: string;
}

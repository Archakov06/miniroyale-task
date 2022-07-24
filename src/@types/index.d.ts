export declare global {
  type MetaDetails = {
    count: number;
    next: string;
    pages: number;
    prev: null | number;
  };

  type ResponseDetails<T = unknown> = {
    info: MetaDetails;
    results: T;
  };

  interface Origin {
    name: string;
    url: string;
  }

  interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: CharacterLocation;
    image: string;
    episode: any[];
    url: string;
    created: Date;
  }

  interface CharacterLocation {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: Date;
  }
}

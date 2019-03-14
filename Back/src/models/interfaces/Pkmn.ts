enum Region {
  Kanto,
  Johto,
  Hoenn,
  Sinnoh,
  Unys,
  Kalos,
  Alola,
  Galar
}

enum Type {
  Plante,
  Poison,
  Feu,
  Vol,
  Eau,
  Insecte,
  Normal,
  Electrik,
  Sol,
  Fee,
  Combat,
  Psy,
  Roche,
  Acier,
  Glace,
  Spectre,
  Dragon,
  Tenebres
}

interface Parent {
  nationalId: number;
  name: string;
}

export interface Pokemon {
  nationalId: number;
  name: string;
  label?: string;
  region: Region;
  shiny: boolean;
  types: Type[];
  weight?: number;
  size?: number;
  parents?: Parent[];
}

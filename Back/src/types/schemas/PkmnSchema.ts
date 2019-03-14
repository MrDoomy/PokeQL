export default `
  enum Region {
    Kanto
    Johto
    Hoenn
    Sinnoh
    Unys
    Kalos
    Alola
    Galar
  }

  enum Type {
    Plante
    Poison
    Feu
    Vol
    Eau
    Insecte
    Normal
    Electrik
    Sol
    Fee
    Combat
    Psy
    Roche
    Acier
    Glace
    Spectre
    Dragon
    Tenebres
  }
  
  type Parent {
    nationalId: Int
    name: String
  }

  input ParentInput {
    nationalId: Int
    name: String
  }

  type Pokemon {
    nationalId: Int!
    name: String!
    label: String
    region: Region!
    shiny: Boolean
    types: [Type!]!
    weight: Float
    size: Float
    parents: [Parent]
  }

  type Query {
    pokemon(nationalId: Int!): Pokemon
    pokedex(region: Region): [Pokemon]
  }

  type Mutation {
    createPokemon(nationalId: Int!, name: String!, label: String, region: Region!, shiny: Boolean, types: [Type!]!, weight: Float, size: Float, parents: [ParentInput]): Pokemon
    updatePokemon(nationalId: Int!, name: String, label: String, region: Region, shiny: Boolean, types: [Type], weight: Float, size: Float, parents: [ParentInput]): Pokemon
    deletePokemon(nationalId: Int!): Pokemon
  }
`;

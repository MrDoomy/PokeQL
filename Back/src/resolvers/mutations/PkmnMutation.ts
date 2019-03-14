import { Pokemon } from '../../models/interfaces/Pkmn';
import PokemonModel from '../../models/PkmnModel';

export const createPokemon = (_: any, { nationalId, name, label, region, shiny, types, weight, size, parents }: Pokemon) => {
  const newPkmn = new PokemonModel({ nationalId, name, label, region, shiny, types, weight, size, parents });

  return new Promise((resolve, reject) => {
    newPkmn.save((err: Error, res: Pokemon) => {
      err ? reject(err) : resolve(res);
    });
  });
};

export const updatePokemon = (_: any, { nationalId, name, label, region, shiny, types, weight, size, parents }: Pokemon) => {
  return new Promise((resolve, reject) => {
    PokemonModel.findOneAndUpdate({ nationalId }, { $set: { name, label, region, shiny, types, weight, size, parents }}).exec((err: Error, res: Pokemon) => {
      err ? reject(err) : resolve(res);
    });
  });
};

export const deletePokemon = (_: any, args: Pokemon) => {
  return new Promise((resolve, reject) => {
    PokemonModel.findOneAndRemove(args).exec((err: Error, res: Pokemon) => {
      err ? reject(err) : resolve(res);
    });
  });
};

import { Pokemon } from '../../models/interfaces/Pkmn';
import PokemonModel from '../../models/PkmnModel';

export const pokemon = (_: any, args: Pokemon) => {
  return new Promise((resolve, reject) => {
    PokemonModel.findOne(args).exec((err: Error, res: Pokemon) => {
      err ? reject(err) : resolve(res);
    });
  });
};

export const pokedex = (_: any, args: Pokemon) => {
  return new Promise((resolve, reject) => {
    PokemonModel.find(args).exec((err: Error, res: Pokemon[]) => {
      err ? reject(err) : resolve(res);
    });
  });
};

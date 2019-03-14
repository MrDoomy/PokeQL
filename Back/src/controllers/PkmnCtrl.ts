import { Pokemon } from '../models/interfaces/Pkmn';
import PokemonModel from '../models/PkmnModel';

// Data
import pkmnFromKanto from '../../scripts/pushKantoPkmn';
import pkmnFromJohto from '../../scripts/pushJohtoPkmn';
import pkmnFromHoenn from '../../scripts/pushHoennPkmn';
import pkmnFromSinnoh from '../../scripts/pushSinnohPkmn';

const createPkmn = (pkmn: Pokemon) => {
  const { nationalId, name, label, region, shiny, types, weight, size, parents } = pkmn;

  const newPkmn = new PokemonModel({
    nationalId,
    name,
    label,
    region,
    shiny,
    types,
    weight,
    size,
    parents
  });

  newPkmn.save();
};

const updatePkmn = (pkmn: Pokemon) => {
  const { nationalId, name, label, region, shiny, types, weight, size, parents } = pkmn;

  PokemonModel.findOneAndUpdate({ nationalId }, {
    $set: {
      name,
      label,
      region,
      shiny,
      types,
      weight,
      size,
      parents
    } 
  }).exec();
};

/**
 * Initialize Data
 */
export const initDataBase = () => {
  PokemonModel.find().exec((err: Error, res: Pokemon[]) => {
    if (err) {
      console.log(err);
    }

    // Kanto
    res.length > 0
      ? pkmnFromKanto.forEach((pkmn: any) => updatePkmn(pkmn))
      : pkmnFromKanto.forEach((pkmn: any) => createPkmn(pkmn));

    // Johto
    res.length > 0
      ? pkmnFromJohto.forEach((pkmn: any) => updatePkmn(pkmn))
      : pkmnFromJohto.forEach((pkmn: any) => createPkmn(pkmn));

    // Hoenn
    res.length > 0
      ? pkmnFromHoenn.forEach((pkmn: any) => updatePkmn(pkmn))
      : pkmnFromHoenn.forEach((pkmn: any) => createPkmn(pkmn));

    // Sinnoh
    res.length > 0
      ? pkmnFromSinnoh.forEach((pkmn: any) => updatePkmn(pkmn))
      : pkmnFromSinnoh.forEach((pkmn: any) => createPkmn(pkmn));
  });
};

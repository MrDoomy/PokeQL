import { Pokemon } from '../models/interfaces/Pkmn';
import PokemonModel from '../models/PkmnModel';

// Data
import pkmnFromKanto from '../../scripts/pushKantoPkmn';
import pkmnFromJohto from '../../scripts/pushJohtoPkmn';
import pkmnFromHoenn from '../../scripts/pushHoennPkmn';
import pkmnFromSinnoh from '../../scripts/pushSinnohPkmn';
// import pkmnFromUnys from '../../scripts/pushUnysPkmn';

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

const readPkmn = (pkmn: Pokemon) => {
  const { nationalId } = pkmn;

  PokemonModel.findOne({ nationalId }).exec((err: Error, res: Pokemon) => {
    if (err) {
      console.log(err);
    }

    res ? updatePkmn(pkmn) : createPkmn(pkmn);
  });
};

const updatePkmn = (pkmn: Pokemon) => {
  const { nationalId, name, label, region, shiny, types, weight, size, parents } = pkmn;

  PokemonModel.findOneAndUpdate({ nationalId }, {
    name,
    label,
    region,
    shiny,
    types,
    weight,
    size,
    parents
  }).exec();
};

/**
 * Initialize Data
 */
export const initDataBase = () => {
  pkmnFromKanto.forEach((pkmn: any) => readPkmn(pkmn));
  pkmnFromJohto.forEach((pkmn: any) => readPkmn(pkmn));
  pkmnFromHoenn.forEach((pkmn: any) => readPkmn(pkmn));
  pkmnFromSinnoh.forEach((pkmn: any) => readPkmn(pkmn));
  // pkmnFromUnys.forEach((pkmn: any) => readPkmn(pkmn));
};

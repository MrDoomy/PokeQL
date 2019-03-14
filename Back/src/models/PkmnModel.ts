import { Document, Schema, model } from 'mongoose';
import { Pokemon } from './interfaces/Pkmn';

interface PokemonModel extends Pokemon, Document {}

const PokemonSchema: Schema = new Schema({
  nationalId: {
    type: Number,
    required: true,
    unique: true,
    minlength: 1,
    maxlength: 3
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  label: {
    type: String
  },
  region: {
    type: String,
    required: true
  },
  shiny: {
    type: Boolean,
    default: false
  },
  types: {
    type: Array,
    required: true
  },
  weight: {
    type: Number
  },
  size: {
    type: Number
  },
  parents: [
    {
      nationalId: {
        type: Number,
        minlength: 1,
        maxlength: 3
      },
      name: {
        type: String,
        trim: true
      }
    }
  ]
},
{
  collection: 'pokemon',
  versionKey: false
});

export default model<PokemonModel>('Pkmn', PokemonSchema);

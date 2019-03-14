import { mergeTypes } from 'merge-graphql-schemas';
import Pokemon from './schemas/PkmnSchema';

const typeDefs = [Pokemon];

export default mergeTypes(typeDefs, { all: true });

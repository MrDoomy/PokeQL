import * as pkmnQueries from './queries/PkmnQuery';
import * as pkmnMutations from './mutations/PkmnMutation';

const resolvers = {
  Query: {
    ...pkmnQueries
  },
  Mutation: {
    ...pkmnMutations
  }
};

export default resolvers;

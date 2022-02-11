// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Pokemon } = initSchema(schema);

export {
  Pokemon
};
import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PokemonMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Pokemon {
  readonly id: string;
  readonly number?: string;
  readonly imageUrl?: string;
  readonly name?: string;
  readonly description?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Pokemon, PokemonMetaData>);
  static copyOf(source: Pokemon, mutator: (draft: MutableModel<Pokemon, PokemonMetaData>) => MutableModel<Pokemon, PokemonMetaData> | void): Pokemon;
}
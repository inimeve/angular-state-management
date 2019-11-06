import {Action, createReducer, on} from '@ngrx/store';
import * as PetActions from './pet.actions';

export const petKey = 'pet';

export interface PetsState {
  pets: Pets;
}

export const petStoreInitialState: PetsState = {
  pets: {list: []}
};

const petReducer = createReducer(
  petStoreInitialState,

  on(PetActions.loadPets, state => state),

  on(PetActions.loadPetsSucess, (state, payload) => ({
    ...state,
    pets: {list: payload.pets}
  })),
  on(PetActions.loadPetsError, (state, payload) => ({
    ...state,
    pets: {list: payload.pets}
  }))

);

export function reducer(state: PetsState | undefined, action: Action) {
  return petReducer(state, action);
}

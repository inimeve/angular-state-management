import {createFeatureSelector, createSelector} from '@ngrx/store';
import {petKey, PetsState} from './pet.reducer';

export const getPetState = createFeatureSelector<PetsState >(
  petKey
);

export const getPetsList = createSelector(
  getPetState,
  (state: PetsState ) => state.pets.list
);

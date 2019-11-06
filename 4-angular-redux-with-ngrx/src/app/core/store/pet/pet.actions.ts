import {createAction, props} from '@ngrx/store';

export const loadPets = createAction(
  '[Pets] Load Pets'
);

export const loadPetsSucess = createAction(
  '[Pets] Load Pets Success',
  props<{ pets: any }>()
);

export const loadPetsError = createAction(
  '[Pets] Load Pets Error',
  props<{ pets: any }>()
);

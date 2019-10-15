import {AppStateAction} from './app-state.action';

export interface AppStateReducer<T> {
  (state: T, action: AppStateAction): T;
}

export const appStateReducer: AppStateReducer<number> = (state: number, action: AppStateAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'PLUS':
      return state + action.payload;
    default:
      return state;
  }
};


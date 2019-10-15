export interface AppStateAction {
  type: string;
  payload?: any;
}

export const incrementAction: AppStateAction = { type: 'INCREMENT' };

export const decrementAction: AppStateAction = { type: 'DECREMENT' };

export const plusSevenAction : AppStateAction = { type: 'PLUS' };

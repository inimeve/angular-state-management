import {appStateReducer, AppStateReducer} from './app-state.reducer';
import {AppStateAction} from './app-state.action';

export interface ListenerCallBack {
  (): void;
}

export interface UnsubscribeCallback {
  (): void;
}

export class AppStateStore<T> {
  private _state: T;

  private _listeners: ListenerCallBack[] = [];

  constructor(
    private reducer: AppStateReducer<T>,
    initialState: T
  ) {
    this._state = initialState;
  }

  getState(): T {
    return this._state;
  }

  dispatch(action: AppStateAction): void {
    this._state = this.reducer(this._state, action);
    this._listeners.forEach((listener: ListenerCallBack) => listener());
  }

  subscribe(listener: ListenerCallBack): UnsubscribeCallback {
    this._listeners.push(listener);

    return () => {
      this._listeners = this._listeners.filter(l => l !== listener);
    }
  }

}

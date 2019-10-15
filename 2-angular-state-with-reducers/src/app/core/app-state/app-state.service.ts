import { Injectable } from '@angular/core';
import {AppStateStore} from './app-state.store';
import {appStateReducer} from './app-state.reducer';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public appStateStore: AppStateStore<number>;

  constructor() {
    this.appStateStore = new AppStateStore<number>(appStateReducer, 0);
  }

  public getCounter() {
    return this.appStateStore.getState();
  }

  public increment() {
    this.appStateStore.dispatch({type: 'INCREMENT'});
  }

  public decrement() {
    this.appStateStore.dispatch({type: 'DECREMENT'});
  }

}

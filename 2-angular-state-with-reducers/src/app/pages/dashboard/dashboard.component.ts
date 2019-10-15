import { Component, OnInit } from '@angular/core';
import {appStateReducer} from '../../core/app-state/app-state.reducer';
import {AppStateStore} from '../../core/app-state/app-state.store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    // console.log(appStateReducer(3, {type: 'PLUS', payload: 7}));
    const appStateStore: AppStateStore<number> = new AppStateStore<number>(appStateReducer, 0);
    appStateStore.dispatch({type: 'INCREMENT'});

    console.log(appStateStore.getState());
  }

}

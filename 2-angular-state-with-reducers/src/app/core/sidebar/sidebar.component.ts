import {Component, OnInit} from '@angular/core';
import {UnsubscribeCallback} from '../app-state/app-state.store';
import {AppStateService} from '../app-state/app-state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  counter: number = 0;

  constructor(private appStateService: AppStateService) {}

  ngOnInit() {
    const unsubscribe: UnsubscribeCallback = this.appStateService.appStateStore.subscribe(() => {
      this.counter = this.appStateService.getCounter();
    });
  }

}

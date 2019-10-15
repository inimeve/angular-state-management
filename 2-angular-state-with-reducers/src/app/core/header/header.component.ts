import {Component, OnInit} from '@angular/core';
import {UnsubscribeCallback} from '../app-state/app-state.store';
import {AppStateService} from '../app-state/app-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  avatarUrl: string = 'assets/avatar-set/';

  counter: number = 0;

  constructor(private appStateService: AppStateService) {
    this.avatarUrl = this.avatarUrl.concat(Math.round(Math.random() * 8 + 1).toString() + '.png');
  }

  ngOnInit() {
    const unsubscribe: UnsubscribeCallback = this.appStateService.appStateStore.subscribe(() => {
      this.counter = this.appStateService.getCounter();
    });
  }

  private increment() {
    this.appStateService.increment();
  }

  private decrement() {
    this.appStateService.decrement();
  }

}

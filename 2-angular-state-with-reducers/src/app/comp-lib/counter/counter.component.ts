import { Component, OnInit } from '@angular/core';
import {AppStateService} from '../../core/app-state/app-state.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count: number = 0;

  constructor(private appStateService: AppStateService) { }

  ngOnInit() {
    this.appStateService.appStateStore.subscribe(() => {
      this.count = this.appStateService.getCounter();
    });
  }

  private increment() {
    this.appStateService.increment();
  }

  private decrement() {
    this.appStateService.decrement();
  }

}

import {Component, OnInit} from '@angular/core';
import {CounterStore} from '../../services/counter.store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subjectCounter: number;

  beaviorSubjectCounter: number;

  constructor(private counterStore: CounterStore) {
    // this.counterStore.getSubjectCounter().subscribe((counter: number) => {
    //   this.subjectCounter = counter;
    // });
    // this.counterStore.getBehaviorSubjectCounter().subscribe((counter: number) => {
    //   this.beaviorSubjectCounter = counter;
    // });
  }

  ngOnInit() {
    // this.counterStore.getSubjectCounter().subscribe((counter: number) => {
    //   this.subjectCounter = counter;
    // });
    // this.counterStore.getBehaviorSubjectCounter().subscribe((counter: number) => {
    //   this.beaviorSubjectCounter = counter;
    // });
  }

}

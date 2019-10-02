import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/services/todo.model';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input()
  todo: Todo;

  @Output()
  onComplete = new EventEmitter();

  @Output()
  onRemove = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  complete() {
    this.onComplete.emit(true);
  }

  remove() {
    this.onRemove.emit(this.todo.id);
  }

}

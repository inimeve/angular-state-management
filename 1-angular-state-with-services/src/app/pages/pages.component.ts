import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TodosStoreService } from '../services/todos-store.service';
import { Todo } from '../services/todo.model';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  completedCounter: number;

  @ViewChild('todoTitleInput', {static: false}) todoTitleInput: ElementRef;

  constructor(private todosStore: TodosStoreService) { }

  ngOnInit() {
    this.todosStore.completedTodos$.subscribe((completedTodos: Todo[]) => {this.completedCounter = completedTodos.length});
  }

  onAddTodo(title: string){
    this.todosStore.addTodo(title); 
    this.todoTitleInput.nativeElement.value = '';
  }

}

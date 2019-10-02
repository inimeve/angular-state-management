import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TodosStoreService } from 'src/app/services/todos-store.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  @ViewChild('todoTitleInput', {static: false}) todoTitleInput: ElementRef;

  constructor(private todosStore: TodosStoreService) { }

  ngOnInit() {
  }

  onAddTodo(title: string){
    this.todosStore.addTodo(title); 
    this.todoTitleInput.nativeElement.value = '';
  }

}

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TodosStoreService } from 'src/app/services/todos-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('todoTitleInput', {static: false}) todoTitleInput: ElementRef;

  constructor(private todosStore: TodosStoreService) { }

  ngOnInit() {
  }

  onAddTodo(title: string){
    this.todosStore.addTodo(title); 
    this.todoTitleInput.nativeElement.value = '';
  }

}

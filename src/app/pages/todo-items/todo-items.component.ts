import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: Todo = new Todo;

  @Output() removeTodo: EventEmitter<Todo>=new EventEmitter();
  @Output() checkedTodo:EventEmitter<Todo>= new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  onChecked(todo:Todo){
    this.checkedTodo.emit(todo);
    console.log("Marked as Done "+todo);
    
  }

  onClick(todo:Todo){
    this.removeTodo.emit(todo);
    console.log("onClick Triggered");
    
  }


}

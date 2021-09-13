import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todos';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css'],
})
export class AddTodosComponent implements OnInit {
  title: string = '';
  desc!: string;
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {}
  onPost() {
    const todo = {
      id: 1,
      title: this.title,
      desc: this.desc,
      active: true,
    };

    this.addTodo.emit(todo);
  }
}

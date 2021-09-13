import { Component, OnInit, VERSION } from '@angular/core';
import { Todo } from 'src/app/Todos';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor(private toastr: ToastrService) {
    this.todos = [
      {
        id: 1,
        title: 'This A test todo',
        desc: 'Desc',
        active: true,
      },
      {
        id: 2,
        title: 'This A test todo 2',
        desc: 'Desc',
        active: true,
      },
      {
        id: 3,
        title: 'This A test todo 3',
        desc: 'Desc',
        active: true,
      },
      {
        id: 4,
        title: 'This A test todo 4',
        desc: 'Desc',
        active: true,
      },
    ];
  }

  ngOnInit(): void {}

  addTodo(todo: Todo) {
    console.log(todo);
    this.toastr.success('', 'Todo Added!');
    this.todos.push(todo);
  }

  checkedTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.toastr.warning('', 'Todo Status Changed!');
    this.todos[index].active = !this.todos[index].active;
  }

  removeTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.toastr.error('', 'Todo Removed!');
    this.todos.splice(index, 1);
  }
}

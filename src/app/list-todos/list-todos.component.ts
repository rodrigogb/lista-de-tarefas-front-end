import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public isDone: boolean,
    public targetDate: Date
  ) {

  } 
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  message: string

  // todos = [    
  //   new Todo(1,'Learn to Dance', false, new Date()),
  //   new Todo(2,'Become an Expert in Angular', false, new Date()),
  //   new Todo(3,'Learn to Fly', false, new Date()),
  //   new Todo(4,'Learn to Swin', false, new Date()),
  // ]
  constructor(
    private todoService: TodoDataService
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('rodrigo').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id) {
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('in28minutes', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} successful!`;
        this.refreshTodos();
      }
    )
  }

}

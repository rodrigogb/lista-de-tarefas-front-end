import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
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

  todos = [    
    new Todo(1,'Learn to Dance', false, new Date()),
    new Todo(2,'Become an Expert in Angular', false, new Date()),
    new Todo(3,'Learn to Fly', false, new Date()),
    new Todo(4,'Learn to Swin', false, new Date()),
  ]
  constructor() { }

  ngOnInit() {
  }

}

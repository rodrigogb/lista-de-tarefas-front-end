import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTodos(userName) {
    return this.http.get<Todo[]>(`http://localhost:8090/users/${userName}/todos`);
 
  }

  deleteTodo(userName, id) {
     return this.http.delete(`http://localhost:8090/users/${userName}/todos/${id}`)
  }

  retrieveTodo(userName, id) {
    return this.http.get<Todo>(`http://localhost:8090/users/${userName}/todos/${id}`)
  
  }

  updateTodo(userName, id, todo) {
    return this.http.put<Todo>(`http://localhost:8090/users/${userName}/todos/${id}`, todo)
  
  }

  createTodo(userName, todo) {
    return this.http.post<Todo>(`http://localhost:8090/users/${userName}/todos`, todo)
  
  }

}

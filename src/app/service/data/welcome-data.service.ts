import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// define o formato da mensagem (retorno do servico)
export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient  
    ) { }

  executeHelloWorldBeanService() {
   return this.http.get<HelloWorldBean>('http://localhost:8090/hello-world-bean');

  }

  executeHelloWorldBeanServiceWithPathVariable(name) {
    return this.http.get<HelloWorldBean>(`http://localhost:8090/hello-world/path-variable/${name}`);
 
   }

}

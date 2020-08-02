import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  name = ''
  welcomeMessageFromService: string

  // ActivatedRoute
  constructor(
    private route: ActivatedRoute, 
    private service: WelcomeDataService) {

  }

  ngOnInit() {
    // pega o parametro recebido na url
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    // se não chamar o subscribe() a chamada não vai aparecer no 'Network' 
    // do browser e o serviço vai retornar apenas um observable.
    // subscribe() é assicrono
    console.log(this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),       
      error => this.handleErrorResponse(error)
    ));

    // pode ser exibido antes, pois é assincrono:
    console.log('last line of getWelcomeMessage')

  }

  getWelcomeMessageWithParameter() {
    // se não chamar o subscribe() a chamada não vai aparecer no 'Network' 
    // do browser e o serviço vai retornar apenas um observable.
    // subscribe() é assicrono
    console.log(this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),       
      error => this.handleErrorResponse(error)
    ));

    // pode ser exibido antes, pois é assincrono:
    console.log('last line of getWelcomeMessage')

  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromService = error.error.message;    
  }

}

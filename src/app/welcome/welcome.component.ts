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
    console.log(this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)
    ));

  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
  }

}

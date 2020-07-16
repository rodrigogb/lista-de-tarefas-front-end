import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';

// welcome
const routes: Routes = [
  // o path (caminho na url) chama determinado componente
  // caso nao exista o path (**) o app redireciona pro ErrorComponent
  { path:'', component: LoginComponent },
  { path:'login', component: LoginComponent },
  { path:'welcome', component: WelcomeComponent },
  { path:'**', component: ErrorComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

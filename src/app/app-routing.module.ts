import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent} from "./pages/registration/registration.component";
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/Home/home.component"


const routes: Routes = [
  {path: '', component: HomeComponent,pathMatch:"full"},
  {path: 'login', component: LoginComponent,pathMatch:"full"},
  {path: 'signup', component: RegistrationComponent,pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

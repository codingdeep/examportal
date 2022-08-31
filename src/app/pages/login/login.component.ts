import { Component, OnInit } from '@angular/core';
import {registrationForm} from "../../data/input.fields";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFields!:any[];
  buttonText:string = "Login"
  constructor() {
    this.loginFields = registrationForm.filter(field=>field.name == 'username' || field.name == "password")

  }

  public registerUser(data:any){
    console.log(data)
  }

  ngOnInit(): void {
  }

}

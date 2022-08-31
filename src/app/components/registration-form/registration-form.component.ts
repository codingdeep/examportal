import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModelInputField} from "../../models/model.input.field";
import {ModelInputList} from "../../models/model.input.list";
import {InputFieldComponent} from "../input-field/input-field.component";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  @Input() fields: any
  @Input() buttonText!: string
  @Input() getData: any
  @Input() clearForm: any
  @Input() status: boolean | undefined
  @Output() registrationHandler = new EventEmitter<{}>()
  // @ts-ignore
  @ViewChild(InputFieldComponent) child: InputFieldComponent

  constructor() {

  }

  public user: any = {
    firstname:'',
    lastname:'',
    email:'',
    bio:'',
    password:'',
    phone:''
  }

  getFieldData(data: ModelInputField | unknown, name: string) {
    this.user = {
      ...this.user,
      [name]: data
    }
  }

  formSubmit() {
    //@ts-ignore
    this.user={
      ...this.user,
      firstname:""
    }
    const userRoles:any = [
      {
        role: {
          roleId: 4,
          label: "USER"
        }
      }
    ]
    
    this.user['userRoles'] = userRoles;
    this.registrationHandler.emit(this.user);
  }

  ngOnInit(): void {

  }

}

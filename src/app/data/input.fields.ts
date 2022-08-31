import {ModelInputList} from "../models/model.input.list";

export const registrationForm:ModelInputList[] = [
  {name: 'firstname',placeholder: 'Enter first name',type: 'text'},
  {name: 'lastname',placeholder: 'Enter last name',type: 'text'},
  {name: 'password',placeholder: 'Choose Password',type: 'password'},
  {name: 'phone',placeholder: 'Enter phone',type: 'text'},
  {name: 'bio',placeholder: 'Write bio',type: 'text'},
  {name: 'email',placeholder: 'Enter email',type: 'email'},
]

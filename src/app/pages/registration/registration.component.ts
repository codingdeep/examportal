import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {registrationForm} from "../../data/input.fields";
import {ModelInputList} from "../../models/model.input.list";
import {ModelInputField} from "../../models/model.input.field";
import {UserServices} from "../../services/user.services";
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('taskForm') taskForm: ElementRef | undefined;
  formFields:ModelInputList[] = registrationForm;

  constructor(private useService: UserServices,private snackbar: MatSnackBar) {

  }


  registerUser(data: ModelInputField | unknown){
    this.useService.createUser(data).subscribe(
      (data)=>{
        this.snackbar.open("User is saved successfully!","ok",{
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition:'right'
        });

      },
      (e:any)=>{
        // @ts-ignore
          let message = "";
        if(typeof  e.error === "object"){
          Object.keys(e.error).map((er,index)=>{
            message += (index+1)+". "+e.error[er]+"\n"
          })
        }
          this.snackbar.open(message,"ok",{
            duration: 300000,
            verticalPosition: 'top',
            horizontalPosition:'right'
          });

      }
    )

    this.clearForm();
  }

  public clearForm(){
    alert("Cleared")
  }


  ngOnInit(): void {
    console.log(this.taskForm)
  }

}

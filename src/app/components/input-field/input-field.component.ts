import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})

export class InputFieldComponent implements OnInit {
  @Input() field: any
  @Input() value: any
  @Output() getFieldData = new EventEmitter<{}>()
  inputData: any


  constructor() {
  }
  changeHandler($event:any){
    let cat:string = ($event.target as HTMLInputElement).value;
    this.getFieldData.emit(cat)
  }

  public clearField(){
    alert("ok")
  }

  ngOnInit(): void {
    this.inputData = {
      [this.field.name]: ''
    }
  }
  public resetMyField(){
    this.inputData = {
      [this.field.name]: ''
    }
  }
  // [(ngModel)]="inputData[field.name]"
}

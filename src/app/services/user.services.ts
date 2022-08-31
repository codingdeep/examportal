import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ModelInputField} from "../models/model.input.field";
import baseURL from "../utils/helper";
@Injectable({
  providedIn:"root"
})

export class UserServices{
  constructor(private http: HttpClient) {
  }
  public createUser(user:ModelInputField | unknown){
    let url = `${baseURL}/users/create`;
    return this.http.post(url,user)
  }

}

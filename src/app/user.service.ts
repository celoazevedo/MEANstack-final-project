import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // url: string = "http://localhost:3000/api/appUsers/"
  baseUrl: string = "http://localhost:3000/api/"

  appUserUrl: string = "appUsers/"
  loginUrl: string = "appUsers/login/"

  isLoggedIn: boolean = false;
  firstName: string = '';

  constructor(private _http: HttpClient) { }

// getting the API's

  registerUser(form){
    return this._http.post(`${this.baseUrl}${this.appUserUrl}`, form);
  }

  loginUser(userCredentials){
    return this._http.post(`${this.baseUrl}${this.loginUrl}`, userCredentials);
  }

}

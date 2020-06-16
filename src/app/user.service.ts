import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // url: string = "http://localhost:3000/api/appUsers/"
  // that is an observable that will retrieve data
  baseUrl: string = "http://localhost:3000/api/"

  // appUserUrl: string = "appUsers/"
  loginUrl: string = "appUsers/login/"

  isLoggedIn: boolean = false;

  userData: any = [];
  firstName: string = '';
  userEmail: string ='';
  userId = sessionStorage.getItem('userId');

  movieForm: any = {
    thirdPartyMovieId: null,
    userId: null,
    movieTitle: null,
    posterPath: null,
  };

  constructor(public _http: HttpClient) { }

  registerUser(form){
    return this._http.post(`${this.baseUrl}appUsers/`, form);
  }

  loginUser(userCredentials){
    return this._http.post(`${this.baseUrl}appUsers/login/`, userCredentials);
  }

  addFavoriteMovie (movieForm) {
    return this._http.post(`${this.baseUrl}appUsers/${this.userId}/favorites/`, movieForm, {headers: this.createHeader()});
  }

  createHeader() {
    return new HttpHeaders().set('Authorization', sessionStorage.getItem('token'));
  }

}

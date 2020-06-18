import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:3000/api/"
  loginUrl: string = "appUsers/login/"

  isLoggedIn: boolean = false;

  firstName: string = '';
  userEmail: string ='';
  userId = sessionStorage.getItem('userId');
  token = sessionStorage.getItem('token');
  
  // movieTitle: string = '';

  movieForm: any = {
    movieId: null,
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

  createHeader() {
    return new HttpHeaders().set('Authorization', sessionStorage.getItem('token'));
  }
  
  addFavoriteMovie (movieForm) {
    return this._http.post(`${this.baseUrl}appUsers/${this.userId}/favorites/`, movieForm, {headers: this.createHeader()});
  }

  getFavorites(){
    return this._http.get(`${this.baseUrl}appUsers/${this.userId}/favorites??access_token=${this.token}`);
  }

}

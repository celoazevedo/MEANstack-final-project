import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {


  baseUrl: string = environment.apiUrl;
  // baseUrl: string = "http://localhost:3000/api/"
  loginUrl: string = "appUsers/login/"

  isLoggedIn: boolean = false;

  firstName: string = '';
  userEmail: string ='';
  // userId = sessionStorage.getItem('userId');
  // // token: string = '';
  token = sessionStorage.getItem('token');
  
  // movieTitle: string = '';
  data: any = [];

  // movieForm is updated with the onClick() function that invoques the addFavoriteMovie() from userService
  movieForm: any = {
    movieId: null,
    userId: null,
    movieTitle: null,
    posterPath: null,
  };

  movies: any = [];

  constructor(public _http: HttpClient) { }

  // the user credentials include the same info as in the form. 
  // here we are just passing in a parameter so we can pass in 
  // the form object when we invoque this function in the register Component.
  registerUser(userCredentials){
    return this._http.post(`${this.baseUrl}appUsers/`, userCredentials);
  }

  loginUser(userCredentials){
    return this._http.post(`${this.baseUrl}appUsers/login/`, userCredentials);
  }

  logoutUser(){
    return this._http.post(`${this.baseUrl}appUsers/logout/`, sessionStorage.getItem('token'), {headers: this.createHeader()});
  }

  // getCredentials(){
  // }

  createHeader() {
    return new HttpHeaders().set('Authorization', sessionStorage.getItem('token'));
  }
  
  addFavoriteMovie(movieForm) {
    return this._http.post(`${this.baseUrl}appUsers/${sessionStorage.getItem('userId')}/favorites/`, movieForm, {headers: this.createHeader()});
  }

  getFavorites(movieForm){
    return this._http.get(`${this.baseUrl}appUsers/${sessionStorage.getItem('userId')}/favorites??access_token=${this.token}`, movieForm);
  }

//checking if the object in the movies array is already in the favorites

//   checkFavorited(){
//     for (let i=0; i< this.movies.length; i++){
//       for (let j=0 ; j< this.movies.length; j++){
//         if (this.movies[i].id == this.favorites[j].movieID){
//           this.movies[i].favorited = true;
//           console.log("works!")
//         }
//       }
//     }
//   }
}

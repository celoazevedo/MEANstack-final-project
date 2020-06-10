import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // baseUrl: string = "https://api.themoviedb.org/3/movie/551?api_key="
  baseUrl: string = "https://api.themoviedb.org/3/"
  apiKey: string = "725a852ae3ce6bbac3d49e1e1b58773d"

  constructor(public _http: HttpClient) { }

  //popular
  getMovies() {
    return this._http.get(`${this.baseUrl}movie/popular?api_key=${this.apiKey}`)
  }

  getGenre() {
    return this._http.get(`${this.baseUrl}genre/movie/list?api_key=${this.apiKey}`)
  }

  getUpcomingMovies() {
    return this._http.get(`${this.baseUrl}movie/upcoming?api_key=${this.apiKey}`)
  }

  getLatestMovies() {
    return this._http.get(`${this.baseUrl}movie/latest?api_key=${this.apiKey}`)
  }

  getFavoriteMovie () {
    // return this._http.get(this.baseUrl + this.apiKey);
  }

  getSearchMovies(searchInput) {
    return this._http.get(`https://api.themoviedb.org/3/search/movie?api_key=725a852ae3ce6bbac3d49e1e1b58773d&language=en-US&query=${searchInput}&page=1&include_adult=false`)
  }

//https://api.themoviedb.org/3/search/movie?api_key=725a852ae3ce6bbac3d49e1e1b58773d&language=en-US&query=REPLACE&page=1&include_adult=false

}

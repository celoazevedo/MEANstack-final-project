import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // baseUrl: string = "https://api.themoviedb.org/3/movie/551?api_key="
  baseUrl: string = "https://api.themoviedb.org/3/"
  apiKey: string = "725a852ae3ce6bbac3d49e1e1b58773d"

  favMoviesData: any = [];

  data: any = [];
  movieTitle: string;
  movieId: any;

  // movieInput: boolean = false;

  constructor(public _http: HttpClient) { }

  getMovies() {
    return this._http.get(`${this.baseUrl}movie/popular?api_key=${this.apiKey}`)
  }

  getGenreMovies(genre) {
    return this._http.get(`${this.baseUrl}discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}`)
  }

  getUpcomingMovies() {
    return this._http.get(`${this.baseUrl}movie/upcoming?api_key=${this.apiKey}`)
  }

  getTopRatedMovies() {
    return this._http.get(`${this.baseUrl}movie/top_rated?api_key=${this.apiKey}`)
  }

  // getLatestMovies() {
  //   return this._http.get(`${this.baseUrl}movie/latest?api_key=${this.apiKey}&language=en-US`)
  // }

  getSearchMovies(searchInput) {
    return this._http.get(`https://api.themoviedb.org/3/search/movie?api_key=725a852ae3ce6bbac3d49e1e1b58773d&language=en-US&query=${searchInput}&page=1&include_adult=false`)
  }

}

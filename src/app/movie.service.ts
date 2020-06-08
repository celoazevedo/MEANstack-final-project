import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url: string = "https://api.themoviedb.org/3/movie/550?api_key="
  apiKey: string = "725a852ae3ce6bbac3d49e1e1b58773d"

  constructor(private _http: HttpClient) { }

  getFavoriteMovie (){
    return this._http.get(this.url + this.apiKey);
  }


}

import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  movieForm: any = {
    movieId: null,
    userId: null,
    movieTitle: null,
  };
  
  movies: any = [];

  constructor(private _movieService: MovieService,
    public router: Router) { }

  ngOnInit(): void {
  }

  onClick(){
    this._movieService.getFavoriteMovie().subscribe(results => {
      // for (let element of results["movie"]){
      //   this.movies.push(movie)
      // }
      console.log(results)
    })
  }

}

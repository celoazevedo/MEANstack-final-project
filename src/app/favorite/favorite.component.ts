import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  form = {


  }
  movies: any = [];

//sdf
  constructor(private _movieService: MovieService,
    public router: Router) { }

  ngOnInit(): void {
  }

  onClick(){
    this._movieService.getFavoriteMovie().subscribe(results => {
      for (let element of results["items"]){
        this.movies.push(results)
      }
    })
  }

}

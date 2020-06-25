import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router'
import { UserService } from '../user.service';


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
    posterPath: null,
  };

  
  data: any = [];

  constructor(public _movieService: MovieService, public _userService: UserService,
    public router: Router) { }

  ngOnInit(): void {
  }

  getFavoriteMovies(){
    this._userService.getFavorites(this.movieForm)
    .subscribe( (res: any) => {
      // sessionStorage.setItem('token', res.token);
      // sessionStorage.setItem('userId', res.userId);
      // sessionStorage.setItem('id', res.id);
      this.data = res;
      console.log(this.data);
    })
  }



}

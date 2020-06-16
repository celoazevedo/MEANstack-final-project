import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // data: any = [];
  movieForm: any = {
    thirdPartyMovieId: null,
    userId: null,
    movieTitle: null,
    posterPath: null,
  };

  constructor(public _movieService: MovieService, public _userService: UserService,
    public router: Router) { }

    // ngOnInit(): void {
    // }

  ngOnInit() {
    this._movieService.getMovies()
    .subscribe( (res: any) => {
      this._movieService.data = res.results;
      this._movieService.movieTitle = 'Popular Movies';
      console.log(res.results);
        })
      }

  onClick(movie){
    console.log(movie)
    this.movieForm.thirdPartyMovieId = movie.id;
    this.movieForm.movieTitle = movie.title;
    this.movieForm.userId = sessionStorage.getItem("userId");
    this.movieForm.posterPath = movie.poster_path;
    console.log(this.movieForm, 'movie');
    this._userService.addFavoriteMovie(this.movieForm)
    .subscribe( (res: any) => {
      this._userService.movieForm = res.results;
      console.log(this._userService.movieForm);
        })
      }

    
}

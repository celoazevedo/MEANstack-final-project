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

  toggle = true;
  status = 'Enable';
  
  movieForm: any = {
    movieId: null,
    userId: null,
    movieTitle: null,
    posterPath: null,
    voteAverage: null,
    releaseDate: null,
  };

  constructor(public _movieService: MovieService, public _userService: UserService,
    public router: Router) { }

  ngOnInit() {
    this._movieService.getMovies()
    .subscribe( (res: any) => {
      this._movieService.data = res.results;
      this._movieService.movieTitle = 'Popular Movies';
      console.log(res.results);
        })
      }

  // add favorite on click
  onClick(movie){
    this.movieForm.movieId = movie.id;
    this.movieForm.movieTitle = movie.title;
    this.movieForm.userId = sessionStorage.getItem("userId");
    this.movieForm.posterPath = movie.poster_path;
    this.movieForm.voteAverage = movie.vote_average;
    this.movieForm.releaseDate = movie.release_date;
    console.log(this.movieForm, 'movie');
    // need to fix this. All of the icons are changing colors. 
    // Instead of just the icon that is pressed.
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'black' : 'red';
    this._userService.addFavoriteMovie(this.movieForm)
    .subscribe( (res: any) => {
      console.log(res);
        })
      }
    
}

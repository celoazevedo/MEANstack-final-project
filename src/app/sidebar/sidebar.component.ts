import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router'
import { UserService } from '../user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  genreId;
  movieTitle;

  movieForm: any = {
    movieId: null,
    userId: null,
    movieTitle: null,
    posterPath: null,
    voteAverage: null,
    releaseDate: null,
  };

  data: any = [];

  constructor(public _movieService: MovieService, public _userService: UserService,
    public router: Router) { }


  getGenre (genreId, movieTitle) {
    this._movieService.getGenreMovies(genreId)
    .subscribe( (res: any) => {
      this._movieService.data = res.results;
      this._movieService.movieTitle = movieTitle;
      console.log(genreId, movieTitle, this._movieService.data);
      this.goHome();
        })
      }

  getUpcoming (){
    this._movieService.getUpcomingMovies()
      .subscribe((res :any) => {
        this._movieService.data = res.results;
        this._movieService.movieTitle = "Upcoming Movies";
        console.log(this._movieService.data);
        this.goHome();
      })
  }

  getTopRated (){
    this._movieService.getTopRatedMovies()
    .subscribe((res :any) => {
      this._movieService.data = res.results;
      this._movieService.movieTitle = "Top Rated Movies";
      console.log(this._movieService.data);
      this.goHome();
    })
  }

  getFavoriteMovies(){
    this._userService.getFavorites(this.movieForm)
    .subscribe( (res: any) => {
      this._movieService.movieTitle = "Favorite Movies"
      this._movieService.favMoviesData = res;
      console.log(this._movieService.favMoviesData);
    })
  }

  goHome(){
    this.router.navigate(['/home']);
  }

}


  // getFavoriteMovies(){
  //   this._userService.getFavorites(this.movieForm)
  //   .subscribe( (res: any) => {
  //     this._movieService.movieTitle = "Favorite Movies"
  //     // res.id = this.movieForm.movie
  //     this.data = res;
  //     this.data.filter((movieId, index) => {
  //       console.log(movieId, index, this.data.indexOf(movieId), this.data.indexOf(movieId) === index)
  //       return this.data.indexOf(movieId) === index;
  //     })
  //     this._movieService.favMoviesData = this.data;
  //     // this._movieService.favMoviesData = res;
  //     console.log(this._movieService.favMoviesData);
  //     // this.goHome();
  //   })
  // }

    // getLatest(){
  //   this._movieService.getLatestMovies()
  //     .subscribe((res :any) => {
  //       console.log(res);
  //       this._movieService.data = res.results;
  //       this._movieService.movieTitle = "Latest Movies";
  //       console.log(this._movieService.data);
  //       this.goHome();
  //     })
  // }
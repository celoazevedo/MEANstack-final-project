import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router'
import { UserService } from '../user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  //removed---//implements OnInit 

  genreId;
  movieTitle;

  movieForm: any = {
    movieId: null,
    userId: null,
    movieTitle: null,
    posterPath: null,
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

  goHome(){
    this.router.navigate(['/home']);
  }

}

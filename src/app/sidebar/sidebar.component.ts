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

  goHome(){
    this.router.navigate(['/home']);
  }

  getFavoriteMovies(){
    this._userService.getFavorites()
    .subscribe( (res: any) => {
      this._movieService.movieTitle = res.movieTitle;
      
      // // this._movieService.movieId = movieId;
      console.log(this._movieService.data);
    })
  }

}

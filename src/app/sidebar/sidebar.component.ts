import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  //removed---//implements OnInit 

  genreId;

  constructor(public _movieService: MovieService,
    public router: Router) { }

  // ngOnInit(): void {
  //       this._movieService.getMovies().subscribe( (res: any) => {
  //     this.movies = res.results;
  //     console.log(this.movies);
  //   })
  // }

  getGenre (genreId, movieTitle) {
    this._movieService.getGenreMovies(genreId).subscribe( (res: any) => {
      this._movieService.data = res.results;
      this._movieService.movieTitle = movieTitle;
      console.log(genreId, movieTitle, this._movieService.data);
        })
      }
    }

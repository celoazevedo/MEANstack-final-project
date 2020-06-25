import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchInput: string;

  constructor(public _movieService: MovieService,
    public router: Router) { }

  ngOnInit(): void {
  }

  movieSearch() {
    this._movieService.getSearchMovies(this.searchInput)
    .subscribe( (res: any) => {
      this._movieService.data = res.results;
      this._movieService.movieTitle = this.searchInput;
      console.log(this._movieService.movieTitle, this._movieService.data);
    })
  }

}

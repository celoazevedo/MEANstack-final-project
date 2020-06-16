import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchInput: string;
  // data: any = [];

  constructor(public _movieService: MovieService,
    public router: Router) { }

  ngOnInit(): void {

  }

  movieSearch() {
    this._movieService.getSearchMovies(this.searchInput).subscribe( (res: any) => {
      this._movieService.data = res.results;
      this._movieService.movieTitle = this.searchInput;
      console.log(this._movieService.movieTitle, this._movieService.data);
})
}
}
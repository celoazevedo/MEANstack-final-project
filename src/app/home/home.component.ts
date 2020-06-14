import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any = [];

  constructor(public _movieService: MovieService,
    public router: Router) { }

    // ngOnInit(): void {
    // }

  ngOnInit() {
    this._movieService.getMovies().subscribe( (res: any) => {
      this._movieService.data = res.results;
      this._movieService.movieTitle = 'Popular Movies';
      console.log(res.results);
        })
      }
    
}

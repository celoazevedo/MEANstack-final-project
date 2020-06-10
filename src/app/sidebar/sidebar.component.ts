import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  data: any = [];
  movies: any = [];

  constructor(private _movieService: MovieService,
    public router: Router) { }

  // ngOnInit(): void {
  // }

  ngOnInit() {
    this._movieService.getGenre().subscribe( (res: any) => {
      this.data = res.genres;
      console.log(this.data);
    
    // this._movieService.getMovies().subscribe( (res: any) => {
    //   this.movies = res.results;
    //   console.log(this.movies);
    // })
        })
      }

}

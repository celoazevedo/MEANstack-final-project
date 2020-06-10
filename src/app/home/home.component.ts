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


  constructor(private _movieService: MovieService,
    public router: Router) { }

    // ngOnInit(): void {

    // }

  ngOnInit() {
    this._movieService.getMovies().subscribe( (res: any) => {
      this.data = res.results;
      console.log(this.data);
        })
      }
    
}

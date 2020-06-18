import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router'
import { UserService } from '../user.service';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  constructor(public _movieService: MovieService, public _userService: UserService,
    public router: Router) { }

  ngOnInit(): void {
  }

}

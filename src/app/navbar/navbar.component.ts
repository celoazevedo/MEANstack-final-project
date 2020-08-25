import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MovieService } from '../movie.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchInput: string = null;

  constructor(public _movieService: MovieService,
    public _userService: UserService,
    public router: Router) { }

  ngOnInit(): void {
  }

  movieSearch() {
    this._movieService.getSearchMovies(this.searchInput)
    .subscribe( (res: any) => {
      this._movieService.data = res.results;
      this._movieService.movieTitle = this.searchInput;
      console.log(this._movieService.movieTitle, this._movieService.data);
      this.clearSearchInput();
    })
  }

  logOut(){
    this._userService.logoutUser()
    .subscribe( (res: any) => {
      sessionStorage.clear();
      if(sessionStorage.getItem('token') === null){
        this._userService.isLoggedIn = false;
        alert('Logout!');
        this.goHome();
      }
    })
  }

  clearSearchInput() {
    this.searchInput = " ";
  }

  goHome(){
    this.router.navigate(['/home']);
  }

}

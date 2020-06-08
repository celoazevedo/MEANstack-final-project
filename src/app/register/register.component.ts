import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: any = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
  };

  constructor(
    private _userService: UserService, 
    public router: Router) { }

  ngOnInit(): void {

  }

  signUp(){
    this._userService.registerUser(this.form).subscribe( (res: any)=> {
      // console.log(res);
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
      this._userService.firstName = res.firstName;
      this._userService.isLoggedIn = true;
      // this.goToDash();
    }) 
  }

  //need to create a home component
  // goToDash(){
  //   this.router.navigate(['/home']);
  // }



}

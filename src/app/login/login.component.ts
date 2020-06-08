import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {
    email: null,
    password: null,
  };

  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this._userService.loginUser(this.form).subscribe( (res:any)=>{
      console.log(res)
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
      sessionStorage.setItem('loginResId', res.id);
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

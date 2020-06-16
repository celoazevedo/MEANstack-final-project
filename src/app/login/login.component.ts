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

  userData: any = [];

  constructor(public _userService: UserService, public router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this._userService.loginUser(this.form)
    .subscribe( (res: any)=> {
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
      sessionStorage.setItem('resId', res.id);
      res.results = this.userData;
      if (sessionStorage.token != null){ alert('Success!')
      // this._userService.firstName = res.firstName;
      // this._userService.isLoggedIn = true;
      // res.results = this._userService.userData;
      console.log(res.userId);
      this.goHome();
    }
      // } else { 
      //   alert ('Please Register') 
      //   this.goRegister();
      // }
    })
  }

  goHome(){
    this.router.navigate(['/home']);
  }

  goRegister(){
    this.router.navigate(['/register'])
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: any = {
    email: null,
    password: null,
  };

  constructor(public _userService: UserService, public router: Router) { }

  login(){
    this._userService.loginUser(this.form)
    .subscribe( (res: any)=> {
      console.log(res)
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
      sessionStorage.setItem('resId', res.id);
      if (sessionStorage.token != null){ 
        alert('Success!')
        this._userService.isLoggedIn = true;
        this.goHome();
      // } else if (sessionStorage.resId != sessionStorage.userId){ 
      //   alert ('Please Register') 
      //   this.goRegister();
      }
    })
  }
  

  goHome(){
    this.router.navigate(['/home']);
  }

  goRegister(){
    this.router.navigate(['/register'])
  }

}

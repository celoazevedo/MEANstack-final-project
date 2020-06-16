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
    public _userService: UserService, 
    public router: Router) { }

  ngOnInit(): void {

  }

  signUp(){
    this._userService.registerUser(this.form)
    .subscribe( (res: any)=> {
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
      sessionStorage.setItem('id', res.id);
      sessionStorage.setItem('email', res.email);
      if (res.token != null){
      this._userService.firstName = res.firstName;
      this._userService.isLoggedIn = true;
      alert('Registration Successful');
      // console.log(res);
      this.goHome();
      } else { 
        alert('Registration Error')
      }
    }) 
  }

  goHome(){
    this.router.navigate(['/home']);
  }

}

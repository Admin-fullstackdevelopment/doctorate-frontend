import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from '../authService/userAuth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})

export class UserLoginComponent implements OnInit{
  
  loginForm!: FormGroup;

  constructor(private _router: Router, private fb: FormBuilder, private _auth: UserAuthService) {
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
    })
  }
  ngOnInit(): void {
  }

  moveToRegister() {
    this._router.navigate(['/register'])
  }

  login() {
    const data = this.loginForm.value;
    this._auth.signin(data).subscribe((res) => {
      if (res.success) {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/profile'])
        alert(res.message)
      }else{
        alert(res.message)
      }
    }, err => {
      alert("Login faild !!")
    })
  }
}

/* import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authService/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit{

  loginForm!: FormGroup;

  constructor(private _auth: AuthService, private _router: Router, private fb: FormBuilder,) {
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  moveToRegister() {
    this._router.navigate(['/register'])
  }

  login() {
    const data = this.loginForm.value;
    this._auth.signin(data).subscribe((res) => {
      if (res.success) {
        localStorage.setItem('token', res.token)
        alert(res.message)
        this._router.navigate(['/doctor'])
        
      }else{
        alert(res.message)
      }
    }, err => {
      alert("Login faild !!")
    })
  }
}

 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../authService/userAuth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {

  registerForm!: FormGroup;
  message: string = '';
  className ='d-none'
  isProcess:boolean = false;

  constructor(private _router: Router, private fb: FormBuilder, private _auth: UserAuthService) {
    this.registerForm = this.fb.group({
      'displayName': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      /* 'passwordconfirm': ['', Validators.required], */
    })
  }

  ngOnInit(): void {
  }

  moveToLogin() {
    this._router.navigate(['/login'])
  }

  register() {
    alert('Account Created')
    this.isProcess = true;
    const data = this.registerForm.value;
    delete data['confirm']
    this._auth.signup(data)
      .subscribe(res => {
        if (res.success) {
          this.isProcess = false;
          this.message = "Account has been created";
          this.className = 'alert alert-success';
          this._router.navigate(['/login'])
        } else {
          this.isProcess = false;
          this.message = res.message;
          this.className = 'alert alert-danger'
        }
      }, err =>{
        this.isProcess = false;
        this.message = "Server Error!!";
        this.className = 'alert alert-danger'
      })   
  }
}
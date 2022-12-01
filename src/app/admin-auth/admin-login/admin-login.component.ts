import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminAuthService } from '../adminAuthService/adminAuth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  loginForm!: FormGroup;

  constructor(private _router: Router, private fb: FormBuilder, private _auth: AdminAuthService) {
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
    })
  }
  ngOnInit(): void {
  }

  login() {
    const data = this.loginForm.value;
    this._auth.signin(data).subscribe((res) => {
      if (res.success) {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/admin/profile'])
         alert(res.message)
      } else {
        alert(res.message)
      }
    }, err => {
      alert("Login faild !!")
    })
  }
}

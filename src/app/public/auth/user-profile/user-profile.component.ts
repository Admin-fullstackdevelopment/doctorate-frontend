import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../authService/userAuth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  data: any = [];

  constructor(private _auth: UserAuthService, private _router: Router) { }

  ngOnInit(): void {
    this.getProfile()
  }

  getProfile(){
     this._auth.getProfile().subscribe((res)=>{
      if(res.success){
        this.data = res.data;
      }else{
        this.logout();
      }
    }, err => {   
    })

  }
  logout(){
    localStorage.clear()
    this._router.navigate(['/login'])
  }

}
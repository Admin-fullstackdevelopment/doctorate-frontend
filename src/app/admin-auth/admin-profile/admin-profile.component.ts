import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAuthService } from '../adminAuthService/adminAuth.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent {

  data: any = [];

  constructor(private _auth: AdminAuthService, private _router: Router) { }

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
    this._router.navigate(['/auth'])
  }

}
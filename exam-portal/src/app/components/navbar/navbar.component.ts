import { Component, NgZone, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
    
 isLoggedIn=false;
 user=null;
 
  constructor(public loginService:LoginService,private ngZone:NgZone){
    this.loginService.success.subscribe((data)=>{
    if(data){
      this.isLoggedIn = this.loginService.isloggedIn();
       this.user = this.loginService.getUser().username;
    }
    });
 
  }
  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isloggedIn();
    this.user = this.loginService.getUser().username;
  }
  logout()
  {
     this.loginService.logout();
     window.location.reload();
  }
  
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient,private route:Router) { 

  }
  public loginStatusSubject = new Subject<boolean>();
  login:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  success:Observable<any> = this.login.asObservable();
  //current user which is logged in
 public getCurrentUser()
 {
    return this.http.get(`${baseUrl}/user/current-user`)
 }
  //generate token
  public generateToken(loginData:any)
  {
     return this.http.post(`${baseUrl}/user/login/generate-token`,loginData);
  }
  //login user : set token in localstorage
  public loginUser(token:any)
  {
      localStorage.setItem("token",token);
     this.loginStatusSubject.next(true)
      return true;
  }
  //is login : user login or not
  public isloggedIn()
  {
     let tokenStr = localStorage.getItem("token")
     if(tokenStr==undefined || tokenStr == '' || tokenStr==null)
     {
        return false;
     } 
     else 
      return true;
  }
  //logout : remove token from local storage
  public logout()
  {
     localStorage.removeItem("token");
     localStorage.removeItem("user");
     this.route.navigate(['']);
     return true;
  }
  // get token from localstorage
  public getToken()
  {
     return localStorage.getItem("token")
  }
  // set user details
  public setUser(user:any)
  {
     localStorage.setItem("user",JSON.stringify(user));
     this.login.next(true)
  }
 //get user
 public getUser()
 {
   let userStr = localStorage.getItem("user");
   if(userStr!=null)
   {
     return JSON.parse(userStr);
   }
   else 
   {
     this.logout();
     return null;
   }
 }
 //get user role
 public getUserRole()
 {
 
     let user = this.getUser();
     return user.userRoles[0].role.roleName;
 }
}
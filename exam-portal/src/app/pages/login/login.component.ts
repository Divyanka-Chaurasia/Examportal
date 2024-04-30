import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 
    
    constructor(private snack:MatSnackBar,private loginService:LoginService,private router:Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

     loginData:any={
      userName:'',
      passWord:'',
     }

     formSubmit(){
       if(this.loginData.userName.trim()=='' || this.loginData.userName==null)
     {
        this.snack.open("username is required ||" , '', {
          duration:3000,
        }  );
        return;
     }
     if(this.loginData.passWord.trim()=='' || this.loginData.passWord==null)
     {
        this.snack.open("password is required ||" , '', {
          duration:3000,
        }  );
        return;
     }
     //request to server to generate token
     this.loginService.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log('success');
        console.log(data);

        //login...
        this.loginService.loginUser(data.token);
  

        this.loginService.getCurrentUser().subscribe(
          (user:any)=>{
            this.loginService.setUser(user);
            console.log(user);

            //for obsevable
            this.loginService.login.next(true); 
            this.loginService.success.subscribe((data)=>{
              alert("login")
            })

            //redirect .....ADMIN : adminDashboard
            //redirect .....USER : userDashboard
            if(this.loginService.getUserRole()==="ADMIN")
            {
               //admin dashboard
               this.router.navigate(['/admin'])
              
            }
            else if(this.loginService.getUserRole()==="USER")
            {
               // user dashboard
               this.router.navigate(['/userdashboard/0'])
             
            }
            else{
              this.loginService.logout();
            }
          }
        )


      },
      (error)=>{
        console.log('Error !');
        console.log(error);
        this.snack.open("INvalid Details !! try again", '',{
          duration:3000
        }
        
        )
      }
      
     )
      }
}

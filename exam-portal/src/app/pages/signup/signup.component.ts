import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../../services/user-services.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../modals/User';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  
  constructor(private UserServicesService:UserServicesService,private snack:MatSnackBar){}

  signupForm=new FormGroup({
    userName:new FormControl('',[Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]),
    userPassword:new FormControl('',[Validators.required]),
    userFirstName:new FormControl('',[Validators.required]),
    userLastName:new FormControl('',[Validators.required]),
    userEmail:new FormControl('',[Validators.required]),
    userMobile:new FormControl('',[Validators.required]),
  })

  user:User=new User();
  
  get userName(){
    return this.signupForm.get('userName')
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  formSubmit()
  {
    if(this.user.userName == '' || this.user.userName==null)
    {
      //alert("user is required");
      this.snack.open('username is required','',{
        duration:3000,
        // verticalPosition:'top',
        // horizontalPosition:'right',
        // direction:'ltr'
      });
      return;
    }
     //addUser: userservice
     this.UserServicesService.addUser(this.user).subscribe(
      (data:any)=>{
        console.log(data);
        //alert('success');
        Swal.fire(' user is successfully registered !! ','user id is '+data.id,'success');
      },
      (error)=>{
        console.log(error);
        //alert('something went wrong');
        this.snack.open("something went wrong user name already exist !!",'',{
          duration:3000,
        })
      }
     );
  }
}
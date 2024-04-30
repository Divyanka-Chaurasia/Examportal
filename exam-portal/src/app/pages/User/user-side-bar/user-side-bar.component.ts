import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../modals/Category';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-side-bar',
  templateUrl: './user-side-bar.component.html',
  styleUrls: ['./user-side-bar.component.css']
})
export class UserSideBarComponent implements OnInit{
 category:Category[]=[];
  constructor(private categoryService:CategoryService,private snack:MatSnackBar){}
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (data:any)=>{
        this.category=data;
      },
      (error:any)=>{
           this.snack.open('Error in loading categories from server','',{
            duration:3000,
           })
      }
    )
  }

}

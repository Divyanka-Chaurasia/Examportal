import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from '../../../modals/Category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{ 
  
  category:Category=new Category();

  constructor(private categoryService:CategoryService,private snack:MatSnackBar){}
  ngOnInit(): void {
   
  }

  addCategory()
  {

    if(this.category.catTitle.trim()=='' || this.category.catTitle==null)
    {
      this.snack.open("title required",'',{
        duration:1000
      })
      return;
    }

     this.categoryService.addCategory(this.category).subscribe(
      (data:any)=>{
        Swal.fire("success !!", 'category is added successfully')
      },
      (error)=>{
        Swal.fire("error")
      }
     )
  }
}

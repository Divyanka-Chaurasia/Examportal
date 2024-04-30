import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit{

 constructor(private categoryService:CategoryService){}
  ngOnInit(): void {
    this.getAllCategories();
  }
  categories=[
    {
      cid:'',
      catTitle:'',
      catDescription:''
    }
  ]

  //  categories:[]=[];
    
   getAllCategories()
   {
     this.categoryService.getCategories().subscribe(
      (data:any)=>{
        this.categories=data;
        alert(this.categories)
      },
      (error)=>{
        Swal.fire("Error")
      }  
      )
   }
}

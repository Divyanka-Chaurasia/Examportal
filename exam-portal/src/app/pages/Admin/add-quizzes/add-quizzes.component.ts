import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../modals/Category';
import Swal from 'sweetalert2';
import { Quiz } from '../../../modals/Quiz';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizesService } from '../../../services/quizes.service';
import { QuizzRequest } from '../../../payload/server-request/QuizRequest';
@Component({
  selector: 'app-add-quizzes',
  templateUrl: './add-quizzes.component.html',
  styleUrls: ['./add-quizzes.component.css']
})
export class AddQuizzesComponent implements OnInit{
  addQuiz() {
    if (!this.quiz.title || this.quiz.title.trim() === '') {
      this.snack.open("Title is required", '', { duration: 3000 });
      return;
    }
    // Check if category is selected
    if (!this.quiz.cid) {
      this.snack.open("Category is required", '', { duration: 3000 });
      return;
    }
    console.log(this.quiz.cid+"categr")
    // Call server to add quiz
    console.log(this.quiz);
    
    this.quizService.addQuizes(this.quiz).subscribe(
      (data: any) => {
        Swal.fire("Success", "Quiz has been added successfully", "success");
      },
      (error: any) => {
        Swal.fire("Error", "Error while adding quiz", "error");
      }
    );
  }
categories:Category[]=[];
quiz:QuizzRequest=new QuizzRequest();
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (data:any)=>{
        this.categories=data;
      },
      (error:any)=>{
        Swal.fire("data not loading")
      }
    )
  }
  constructor(private categoryService:CategoryService,private snack:MatSnackBar,private quizService:QuizesService){} 
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizesService } from '../../../services/quizes.service';
import { Quiz } from '../../../modals/Quiz';
import { QuizzRequest } from '../../../payload/server-request/QuizRequest';
import { quizResponse } from '../../../payload/server-response/QuizResponse';
import { catResponse } from '../../../payload/server-response/CatResponse';
import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit{
    id=0;
    quizResponse:quizResponse=new quizResponse;
    CategoryResponse:catResponse[]=[];
    constructor(private router:ActivatedRoute,private quiz:QuizesService,private categoryService:CategoryService,private route:Router){}
  ngOnInit(): void {
      this.id = this.router.snapshot.params['qid'];
      this.quiz.getSingleQUiz(this.id).subscribe(
        (data:any)=>{
          this.quizResponse=data;
        },
        (error:any)=>{
          console.log(error);
        }
      )

      this.categoryService.getCategories().subscribe(
        (data:any)=>{
          this.CategoryResponse=data;

        },
        (error:any)=>{
          Swal.fire("error","in loading category");
        }
      )
  }
  updateForm()
  {
      this.quiz.updateQuiz(this.quizResponse,this.id).subscribe(
        (data:any)=>{
          Swal.fire("quiz has updated").then((e)=>{
            this.route.navigate(['/admin/quizess'])
          });
         
        },
        (error:any)=>{
          Swal.fire("error","quiz not updated");
        }
      )
  }
}

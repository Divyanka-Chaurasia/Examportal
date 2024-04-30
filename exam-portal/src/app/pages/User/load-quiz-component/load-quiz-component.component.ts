import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizesService } from '../../../services/quizes.service';
import Swal from 'sweetalert2';
import { Quiz } from '../../../modals/Quiz';
@Component({
  selector: 'app-load-quiz-component',
  templateUrl: './load-quiz-component.component.html',
  styleUrls: ['./load-quiz-component.component.css']
})
export class LoadQuizComponentComponent implements OnInit{
  id:any;
  allQuizzes:Quiz[]=[];
  constructor(private route:ActivatedRoute,private quizService:QuizesService){}
  ngOnInit(): void {
   
    this.route.params.subscribe((params:any)=>{
      this.id = params['catId']; 
      if (this.id == 0) {
        this.quizService.allQuizzes().subscribe(
          (data: any) => {
            this.allQuizzes = data;
            console.log(this.allQuizzes);
          }
        );
      } else {
        console.log('load specific quiz');
        this.quizService.getQuizzesOfCategory(this.id).subscribe(
          (data:any)=>{
            this.allQuizzes=data;
          },
          (error:any)=>{
            alert('error');
          }
        )
      }
    })
    }
}
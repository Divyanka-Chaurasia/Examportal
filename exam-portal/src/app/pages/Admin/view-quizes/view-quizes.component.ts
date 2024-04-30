import { Component, OnInit } from '@angular/core';
import { QuizesService } from '../../../services/quizes.service';
import Swal from 'sweetalert2';
import { Quiz } from '../../../modals/Quiz';

@Component({
  selector: 'app-view-quizes',
  templateUrl: './view-quizes.component.html',
  styleUrls: ['./view-quizes.component.css']
})
export class ViewQuizesComponent implements OnInit{

  constructor(private quizService:QuizesService){}
  quizzes:Quiz[] =[] 
  
    
   ngOnInit(): void {
    this.quizService.allQuizzes().subscribe(
      (data:any)=>{
        this.quizzes=data;
        console.log(this.quizzes);
      },
      (error) =>{
        console.log(error);
        Swal.fire('Error !',"Error loading data");
      }
    )
}
  deleteQuiz(id:any)
  {
      this.quizService.deleteQuiz(id).subscribe(
        (data:any)=>{
          Swal.fire("success","quiz deleted");
          this. quizzes=this.quizzes.filter((quiz)=>quiz.qid!=id);
          
        },
      (error:any)=>
      {
        Swal.fire("error","quiz is not deleted");
      }
    )
  }
}

import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../../../services/questions.service';
import { Questions } from '../../../modals/Questions';
import Swal from 'sweetalert2';
import { QuestionsResponse } from '../../../payload/server-response/QuestionsResponse';
import { QuestionsRequestForUser } from '../../../payload/server-request/QuestionsRequest copy';
import { Quiz } from '../../../modals/Quiz';
import { QuizesService } from '../../../services/quizes.service';
import { AnswerRequest } from '../../../payload/server-request/AnswerResquest';
@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit{
  questions:QuestionsRequestForUser[]=[];
  answer:AnswerRequest=new AnswerRequest();
  qid:any;
  quiz:Quiz=new Quiz();
  attempt:any;
  marksGot:any;
  correctOption:any;
  matchAnswer:any;
  isSubmit=false;
  constructor(private locationSt:LocationStrategy,private route:ActivatedRoute,private questionService:QuestionsService
    ,private quizService:QuizesService
  ){}
  ngOnInit(): void {
   this.preventBackButton();
   this.qid=this.route.snapshot.params['quizId']
   console.log(this.qid);
   this.loadQuestions();
  
  }
  preventBackButton() {
    history.pushState(null, '', location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null, '', location.href);
    });
  }
  loadQuestions() {
    this.questionService.getQuestionsOfQuizForUser(this.qid).subscribe(
      (data:any)=>{
      this.questions=data;
      console.log(data);
      this.questions.forEach((q:any) => {
        q['givenAnswer']='';
      });
      this.quizService.getSingleQUiz(this.questions[0].quizId).subscribe(
        (data:any)=>{
          this.quiz=data;
        },
        (error:any)=>{
          alert("quiz is not present")
        }
      )
      },
      (error:any)=>{
        console.log(error);
        Swal.fire('error',"error loading question")
  }
    )
  }
  submit()
  {
    Swal.fire({
      title: "Do you want to start the quiz",
      showCancelButton: true,
      confirmButtonText: "Submit",
      denyButtonText: `Don't save`,
      icon: 'info',
    }).then((result) => {
      if (result.isConfirmed) {
        this.isSubmit=true;
        this.questions.forEach(question => {
          // Assign values of the current question to this.answer
          this.answer.quesId = question.quesId;
          this.answer.quizId = question.quizId;
          this.answer.givenAnswer = question.givenAnswer;
      
          console.log(this.answer);
          this.questionService.matchAnswer(this.answer).subscribe(
            (data:any)=>{
              this.marksGot=data.marksGot;
              this.correctOption=data.totalCorrectAns;
              this.attempt=data.attempted;
            }
          )
        })
      }
    });
   
  }
}
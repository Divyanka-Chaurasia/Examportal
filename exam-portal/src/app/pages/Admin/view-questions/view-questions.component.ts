import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Questions } from '../../../modals/Questions';
import { QuestionsService } from '../../../services/questions.service';
import Swal from 'sweetalert2';
import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit{
  qid:any;
  title: any;
  constructor(private route:ActivatedRoute,private questionService:QuestionsService,private zone: NgZone){}
  questions:Questions[]=[];
  ngOnInit(): void {
    this.qid=this.route.snapshot.params['quizid'];
    this.title=this.route.snapshot.params['qtitle']
    this.questionService.getQuestionsOfQuiz(this.qid).subscribe(
      (data:any)=>{
        this.questions=data;
      },
      (error:any)=>{
        console.log("data is not present");
      }
    )
  }
  deleteQuestion(id: any) {
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are you sure you want to delete this question?',
    }).then((result) => {
      if (result.isConfirmed) {
        this.questionService.deleteQuestion(id).subscribe(
          (data: any) => {
            this.zone.run(() => {
              Swal.fire("Question is deleted");
            });
          },
          (error: any) => {
            console.error("Error deleting question:", error);
            // Handle error appropriately, e.g., show an error message
          }
        );
      }
    });
  }
}

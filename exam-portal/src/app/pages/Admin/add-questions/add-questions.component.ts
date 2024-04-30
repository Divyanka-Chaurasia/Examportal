import { Component, OnInit } from '@angular/core';
import { Questions } from '../../../modals/Questions';
import { ActivatedRoute } from '@angular/router';
import { QuestionsRequest } from '../../../payload/server-request/QuestionsRequest';
import { QuestionsService } from '../../../services/questions.service';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit{
 constructor(private route:ActivatedRoute,private questionService:QuestionsService){}
  qid:any;
  qtitle:any;
  public Editor = ClassicEditor;
  questions:QuestionsRequest=new QuestionsRequest();
  ngOnInit(): void {
     this.qid=this.route.snapshot.params['Quesqid'];
     this.qtitle=this.route.snapshot.params['Questitle'];
     this.questions.quizId=this.qid;
  }
  formSubmit()
  {
     console.log(this.questions+"questions");
     
    if(this.questions.content.trim()=='' || this.questions.content==null)
    {
      return;
    }
    if(this.questions.option1.trim()=='' || this.questions.option1==null)
    {
      return;
    }
    if(this.questions.option2.trim()=='' || this.questions.option2==null)
    {
      return;
    }
    this.questionService.addQuestions(this.questions) .subscribe(
    (data:any)=>{
    Swal.fire('success','Questions Added','success');
    }),
    (error:any)=>{
      Swal.fire('error','Error in adding a question','error');
    }
  }
}

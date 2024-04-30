import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizesService } from '../../../services/quizes.service';
import { Quiz } from '../../../modals/Quiz';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit{
  quizId:any;
  quiz:Quiz=new Quiz();
  constructor(private route:ActivatedRoute,private quizService:QuizesService,private router:Router){}
  ngOnInit(): void {
   this.quizId=this.route.snapshot.params['qid'];
   this.quizService.getSingleQUiz(this.quizId).subscribe(
    (data:any)=>{
     this.quiz=data;
    },
    (error:any)=>{
    alert('error in loading quiz data')
    }
   )
  }

  StartQuiz()
  {
    Swal.fire({
      title: "Do you want to start the quiz",
      showCancelButton: true,
      confirmButtonText: "start",
      denyButtonText: `Don't save`,
      icon:'info'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.router.navigate(['/start/'+this.quizId])
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }
}

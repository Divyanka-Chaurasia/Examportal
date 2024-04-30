import { Question } from "projects/internship-test/src/app/modals/Question";
import { Category } from "./Category";
export class Quiz {
    qid='';
    title='';
    discription='';
    maxMarks=0;
    numberOfQuestion=0;
    active: boolean = true;
    category= new Category();
   // questions: Question[] = [];
  }
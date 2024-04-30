import { Quiz } from "./Quiz";

export class Questions {
    quesId: string = '';
    content: string = '';
    image: string = '';
    option1: string = '';
    option2: string = '';
    option3: string = '';
    option4: string = '';
    answer: string = '';
    quiz: Quiz=new Quiz();
}
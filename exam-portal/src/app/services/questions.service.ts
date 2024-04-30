import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor(private http:HttpClient) { }
  public allQuestions()
  {
     return this.http.get(`${baseUrl}/question/getAll`);
  }
  public getQuestionsOfQuiz(quizId:any)
  {
     return this.http.get(`${baseUrl}/question/getQuestion/all/${quizId}`)
  }
  public getQuestionsOfQuizForUser(quizId:any)
  {
     return this.http.get(`${baseUrl}/question/getQuestion/all/${quizId}`)
  }
  public addQuestions(data:any)
  { 
    return this.http.post(`${baseUrl}/question/`,data);
  }

  public deleteQuestion(id:any)
  {
     return this.http.get(`${baseUrl}/question/delete/${id}`)
  }

  public matchAnswer(data:any)
  {
     return this.http.post(`${baseUrl}/question/match`,data);
  }
}

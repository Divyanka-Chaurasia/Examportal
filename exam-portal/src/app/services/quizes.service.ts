import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuizesService {
  constructor(private http:HttpClient) { }
    public allQuizzes()
    {
       return this.http.get(`${baseUrl}/quiz/`);
    }
    public addQuizes(data:any)
    {
       return this.http.post(`${baseUrl}/quiz/create`,data);
    }
    public deleteQuiz(id: any) {
      return this.http.delete(`${baseUrl}/quiz/${id}`);
  }
  public getSingleQUiz(id:any)
  {
     return this.http.get(`${baseUrl}/quiz/get/${id}`);
  }
  updateQuiz(data: any,quizId: any) {
    const url = `${baseUrl}/quiz/update`;
    const params = { quizId: String(quizId) }; // Convert quizId to string
    return this.http.put(url, data, { params });
  }
  getQuizzesOfCategory(cid:any)
  {
    return this.http.get(`${baseUrl}/quiz/getQuiz/${cid}`);
  }
}

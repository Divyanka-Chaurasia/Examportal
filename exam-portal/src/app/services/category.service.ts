import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http:HttpClient) { }

  public addCategory(category:any)
  {
     return this.http.post(`${baseUrl}/category`,category)
  }

  public getCategories()
  {
     return this.http.get(`${baseUrl}/category/getAllCategory`)
  }

}

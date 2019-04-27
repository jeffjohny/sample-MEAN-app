import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  uri = 'http://localhost:4001';

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get(`${this.uri}/courses`);   
  }
}

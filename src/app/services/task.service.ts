import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';

import { Observable, of } from 'rxjs';


const httpOption = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:5000/tasks"
  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTasks(task:Task):Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }

  updateTaskReminder(task:Task):Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url,task, httpOption)
  }

  addTask(task:Task):Observable<Task>{
    const url = `${this.apiUrl}`
    return this.http.post<Task>(url,task, httpOption)
  }
}

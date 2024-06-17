import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject= new Subject<any>();

  toggleTask(){
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
    console.log("2122")
  }

  ontoggle(): Observable<any> {
    return this.subject.asObservable();
  }
  constructor() { }
}

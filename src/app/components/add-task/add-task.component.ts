import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  text: string = "";
  day:string = "";
  reminder: boolean = false;
  showAddTask:boolean  = false;
  subscription!:Subscription;

  @Output() onAddTask:EventEmitter<Task> = new EventEmitter();

  onSubmit(){
    if (!this.text){
      alert("Please add Task")
      return
    }
    const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder
    }

    //TODO: Emit event 
    this.onAddTask.emit(newTask);
    this
    this.text = ""
    this.day = ""
    this.reminder = false
  }

  constructor(private uiService:UiService ){
    this.subscription = this.uiService.ontoggle().subscribe((value)=>(this.showAddTask=value));
  }
}

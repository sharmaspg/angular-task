import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Task } from '../../Task';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  text: string = "";
  day:string = "";
  reminder: boolean = false;

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
}

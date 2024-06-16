import { Component,OnInit, Input, Output  } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  fatimes = faTimes;
  @Input()
  task!: Task;


  @Output() 
  onDeleteTask:EventEmitter<Task> = new EventEmitter();

  @Output() DoubleClick:EventEmitter<Task> = new EventEmitter();
  constructor(){}
  
  onDelete(task:any) {
    this.onDeleteTask.emit(task) ;
  }

  onDoubleClick(task:Task){
    this.DoubleClick.emit(task);
  }
}

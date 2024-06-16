import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from '../add-task/add-task.component';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule,TaskItemComponent,HttpClientModule, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  
})
export class TasksComponent implements OnInit {
  tasks: Task[] |undefined;

  constructor(private taskService: TaskService){
  }

  ngOnInit(): void {
   this.taskService.getTasks().subscribe((tasks)=>{
    this.tasks = tasks;
   });  
  }  

  deleteTask(task:Task) {
    this.taskService.deleteTasks(task).subscribe((task:Task)=>{
      this.tasks = this.tasks?.filter(t=>t.id !== task.id);
     });
  }


  onAddTask(task:Task) {
    console.log(task)
    this.taskService.addTask(task).subscribe((task:Task)=>{
      this.tasks?.push(task);
     });  
    // this.taskService.deleteTasks(task).subscribe((task:Task)=>{
    //   this.tasks = this.tasks?.filter(t=>t.id !== task.id);
    //  });
  }

  toggleReminder(task:Task){
    console.log(task)
    task.reminder = !task.reminder

    this.taskService.updateTaskReminder(task).subscribe((task:Task)=>{
    })
  }


}

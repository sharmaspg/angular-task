import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  title: string = "Task Tracker";
  constructor(){};

  ngOnInit(): void {
    
  }
  toggleAddTask() {
    console.log("toggle");
  }
}

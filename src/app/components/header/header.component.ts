import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  title: string = "Task Tracker";
  showAddTask:boolean = false;
  subscription!: Subscription;
  constructor(private uiService:UiService, private router:Router){
    this.subscription = this.uiService.ontoggle().subscribe(value=>this.showAddTask=value);
  };

  ngOnInit(): void {
    
  }
  toggleAddTask() {
    this.uiService.toggleTask();
  }

  hasRouter(router:string) {
    return this.router.url === router;
  }
}

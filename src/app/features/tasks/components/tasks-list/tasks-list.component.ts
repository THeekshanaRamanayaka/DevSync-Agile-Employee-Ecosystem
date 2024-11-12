import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { TasksInterface } from '../../models/tasks.interface';
import { TasksCreateComponent } from '../tasks-create/tasks-create.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [CommonModule, TasksCreateComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent implements OnInit {
  @Input() projectId!: number;
  tasks: TasksInterface[] = [];

  constructor(private tasksService: TasksService) {} 

  ngOnInit(): void {
    this.tasksService.getTasks(this.projectId).subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  getTasks(status: TasksInterface['status']): TasksInterface[] {
    return this.tasks.filter(task => task.status === status);
  }

  updateTaskStatus(id: number, status: TasksInterface['status']): void {
    this.tasksService.updateTaskStatus(id, status);
    this.ngOnInit();
  }

}

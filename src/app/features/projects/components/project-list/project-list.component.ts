import { Component, OnInit } from '@angular/core';
import { ProjectInterface } from '../../models/project.interface';
import { ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from '../../../tasks/components/tasks-list/tasks-list.component';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, TasksListComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit{
  projects: ProjectInterface[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects
    })
  }

  editProject(project: ProjectInterface) {
    console.log('Edit project:', project);
  }

  deleteProject(id: number) {
    this.projectService.deleteProject(id);
  }
}

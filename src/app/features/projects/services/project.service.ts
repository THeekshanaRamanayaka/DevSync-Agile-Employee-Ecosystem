import { Injectable } from '@angular/core';
import { ProjectInterface } from '../models/project.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor() {}
  private projects: ProjectInterface[] = [
    {
      id: 1,
      name: 'Website Redesign',
      description: 'Update the company website with a new modern design',
      createdAt: new Date('2023-03-15'),
      updatedAt: new Date('2023-04-20')
    },
    {
      id: 2, 
      name: 'Mobile App Development',
      description: 'Build a new mobile app for our customers',
      createdAt: new Date('2023-01-05'),
      updatedAt: new Date('2023-05-12')
    },
    {
      id: 3,
      name: 'Database Migration',
      description: 'Move our data to a new database platform',
      createdAt: new Date('2023-02-28'),
      updatedAt: new Date('2023-06-01')
    }
  ];
  private projectsSubject = new BehaviorSubject<ProjectInterface[]>(this.projects);

  getProjects(): Observable<ProjectInterface[]> {
    return this.projectsSubject.asObservable();
  }

  addProject(project: Omit<ProjectInterface, 'id' | 'createdAt' | 'updatedAt'>): void {
    const newProject: ProjectInterface = {
      ...project,
      id: Date.now(),
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.projects.push(newProject);
    this.projectsSubject.next([...this.projects]);
  }

  updateProject(id: number, updates: Partial<ProjectInterface>): void {
    const projectIndex = this.projects.findIndex(project => project.id === id);
    if (projectIndex !== -1) {
      this.projects[projectIndex] = {
        ...this.projects[projectIndex],
        ...updates,
        updatedAt: new Date()
      };
      this.projectsSubject.next([...this.projects]);
    }
  }

  deleteProject(id: number): void {
    this.projects = this.projects.filter(project => project.id !== id);
    this.projectsSubject.next([...this.projects]);
  }
}

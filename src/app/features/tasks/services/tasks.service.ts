import { Injectable } from '@angular/core';
import { TasksInterface } from '../models/tasks.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  private tasks: TasksInterface[] = [
    {
      id: 1,
      projectId: 1,
      title: 'Research new design trends',
      description: 'Gather inspiration from competitor websites',
      status: 'TODO',
      createdAt: new Date('2023-03-16'),
      updatedAt: new Date('2023-03-16')
    },
    {
      id: 2,
      projectId: 1, 
      title: 'Wireframe new homepage',
      description: 'Create low-fidelity wireframes for the homepage',
      status: 'IN_PROGRESS',
      createdAt: new Date('2023-03-20'),
      updatedAt: new Date('2023-03-22')
    },
    {
      id: 3,
      projectId: 2,
      title: 'Design mobile app screens',
      description: 'Design the user interface for the mobile app',
      status: 'COMPLETED',
      createdAt: new Date('2023-01-10'),
      updatedAt: new Date('2023-01-15')
    },
    {
      id: 4,
      projectId: 2,
      title: 'Implement login functionality',
      description: 'Build the login screen and authentication flow',
      status: 'IN_PROGRESS',
      createdAt: new Date('2023-01-20'),
      updatedAt: new Date('2023-02-01')
    },
    {
      id: 5,
      projectId: 3,
      title: 'Evaluate database options',
      description: 'Research and compare different database platforms',
      status: 'TODO',
      createdAt: new Date('2023-03-01'),
      updatedAt: new Date('2023-03-01')
    },
    {
      id: 6,
      projectId: 3,
      title: 'Plan data migration strategy',
      description: 'Determine the steps to migrate data to the new database',
      status: 'IN_PROGRESS',
      createdAt: new Date('2023-04-01'),
      updatedAt: new Date('2023-04-10')
    }
  ];
  private tasksSubject = new BehaviorSubject<TasksInterface[]>(this.tasks);

  getTasks(projectId: number): Observable<TasksInterface[]> {
    return new BehaviorSubject(
      this.tasks.filter(task => task.projectId === projectId)
    ).asObservable();
  }

  addTask(task: Omit<TasksInterface, 'id' | 'createdAt' | 'updatedAt'>): void {
    const newTask: TasksInterface = {
      ...task,
      id: Date.now(),
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.tasks.push(newTask);
    this.tasksSubject.next([...this.tasks]);
  }

  updateTaskStatus(id: number, status: TasksInterface['status']): void {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = {
        ...this.tasks[taskIndex],
        status,
        updatedAt: new Date()
      };
      this.tasksSubject.next([...this.tasks]);
    }
  }
}

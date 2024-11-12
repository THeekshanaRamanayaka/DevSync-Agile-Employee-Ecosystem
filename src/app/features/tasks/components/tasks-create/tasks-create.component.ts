import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';
import { TasksListComponent } from '../tasks-list/tasks-list.component';

@Component({
  selector: 'app-tasks-create',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './tasks-create.component.html',
  styleUrl: './tasks-create.component.css'
})
export class TasksCreateComponent {
  @Input() projectId!: number;
  taskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskService: TasksService,
    private tasksList: TasksListComponent
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      status: ['']
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.taskService.addTask({
        ...this.taskForm.value,
        projectId: this.projectId,
        status: 'TODO'
      });
      this.taskForm.reset();
      this.tasksList.ngOnInit();
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PerformanceService } from '../../services/performance.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './review-create.component.html',
  styleUrl: './review-create.component.css'
})
export class ReviewCreateComponent {
  reviewForm: FormGroup;
  ratingCategories = ['Technical Skills', 'Communication', 'Teamwork', 'Productivity', 'Initiative'];

  constructor(
    private fb: FormBuilder,
    private performanceService: PerformanceService,
    private router: Router
  ) {
    this.reviewForm = this.fb.group({
      employeeId: ['', Validators.required],
      reviewDate: ['', Validators.required],
      technicalSkills: [3, [Validators.required, Validators.min(1), Validators.max(5)]],
      communication: [3, [Validators.required, Validators.min(1), Validators.max(5)]],
      teamwork: [3, [Validators.required, Validators.min(1), Validators.max(5)]],
      productivity: [3, [Validators.required, Validators.min(1), Validators.max(5)]],
      initiative: [3, [Validators.required, Validators.min(1), Validators.max(5)]],
      comment: [''],
      status: ['draft']
    });
  }

  onSubmit(): void {
    if (this.reviewForm.valid) {
      const formValue = this.reviewForm.value;
      const review = {
        ...formValue,
        ratings: {
          technicalSkills: formValue.technicalSkills,
          communication: formValue.communication,
          teamwork: formValue.teamwork,
          productivity: formValue.productivity,
          initiative: formValue.initiative
        },
        goals: [],
        managerId: 'current-manager-id',
        createdAt: new Date(),
        updatedAt: new Date()
      };
      this.performanceService.createReview(review).subscribe({
        next: () => {
          this.router.navigate(['/admin/performance']);
        },
        error: (error) => {
          console.error('Error creating review:', error);
          // Handle error (show message to user)
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/admin/performance']);
  }
}
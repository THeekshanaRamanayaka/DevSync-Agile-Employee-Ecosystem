import { Component, OnInit } from '@angular/core';
import { PerformanceReviewInterface } from '../../models/performance-review.interface';
import { PerformanceService } from '../../services/performance.service';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review-list',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterModule],
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.css'
})
export class ReviewListComponent implements OnInit {
  reviews: PerformanceReviewInterface[] = [];

  constructor(private performanceService: PerformanceService) { }

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews() {
    this.performanceService.getReviews().subscribe((reviews) => {
      this.reviews = reviews;
    });
  }

  deleteReview(id: string): void {
    if (confirm('Are you sure you want to delete this review?')) {
      this.performanceService.deleteReview(id).subscribe(() => {
        this.reviews = this.reviews.filter((review) => review.id !== id);
      });
      this.loadReviews();
    }
  }
}

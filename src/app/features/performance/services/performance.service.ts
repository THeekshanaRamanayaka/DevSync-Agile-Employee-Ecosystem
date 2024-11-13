import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PerformanceReviewInterface } from '../models/performance-review.interface';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {
  private apiUrl = '';

  constructor(private http: HttpClient) {}

  getReviews() {
    return this.http.get<PerformanceReviewInterface[]>(this.apiUrl);
  }

  getReviewById(id: string) {
    return this.http.get<PerformanceReviewInterface>(`${this.apiUrl}/${id}`);
  }

  createReview(review: Omit<PerformanceReviewInterface, 'id'>): Observable<PerformanceReviewInterface> {
    return this.http.post<PerformanceReviewInterface>(this.apiUrl, review);
  }

  updateReview(id: string, review: Partial<PerformanceReviewInterface>): Observable<PerformanceReviewInterface> {
    return this.http.put<PerformanceReviewInterface>(`${this.apiUrl}/${id}`, review);
  }

  deleteReview(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

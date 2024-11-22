import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeInterface } from '../models/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly apiUrl = 'http://localhost:8080/employee';

  constructor(private http: HttpClient) {}

  // generateEmployeeId(): any {
  //   return this.http.get(`${this.apiUrl}/generate-employee-id`);
  // }

  createEmployee(employeeData: EmployeeInterface): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.apiUrl}/add-employee`, employeeData, { headers });
  }
}

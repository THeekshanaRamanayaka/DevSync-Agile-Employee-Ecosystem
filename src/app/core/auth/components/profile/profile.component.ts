import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

export interface Profile {
  employeeId: string;
  name: string;
  department: string;
  role: string;
  position: string;
  contactNumber: string;
  joinDate: Date;
  status: 'active' | 'inactive';
  email: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  proficiencyLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience: number;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  skillForm: FormGroup;
  isEditing = false;
  profile: Profile | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      department: ['', Validators.required],
      role: ['', Validators.required],
      position: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]], 
    });

    this.skillForm = this.fb.group({
      name: ['', Validators.required],
      proficiencyLevel: ['', Validators.required],
      yearsOfExperience: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
    this.profile = {
      employeeId: 'EMP001',
      name: 'John Doe',
      department: 'IT',
      role: 'Developer',
      position: 'Software Engineer',
      contactNumber: '1234567890',
      joinDate: new Date('2022-01-01'),
      status: 'active',
      email: 'LxX3L@example.com',
      skills: [
        {
          name: 'Angular',
          proficiencyLevel: 'advanced',
          yearsOfExperience: 2
        }
      ]
    };
    this.profileForm.patchValue(this.profile);
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log('Form submitted:', this.profileForm.value);
      this.isEditing = false;
    }
  }

  addSkill(): void {
    if (this.skillForm.valid && this.profile) {
      this.profile.skills.push(this.skillForm.value);
      this.skillForm.reset();
    }
  }

  removeSkill(index: number): void {
    if (this.profile) {
      this.profile.skills.splice(index, 1);
    }
  }
}
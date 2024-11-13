import { Component, OnInit } from '@angular/core';
import { SkillInterface } from './models/skill.interface';
import { SkillService } from './services/skill.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skills: SkillInterface[] = [];
  newSkill: SkillInterface = { id: '', name: '', proficiency: 0, userId: '' };
  editingSkill: SkillInterface = { id: '', name: '', proficiency: 0, userId: '' };

  constructor(private skillService: SkillService) {}

  ngOnInit(): void {
    this.fetchSkills();
  }

  fetchSkills(): void {
    this.skillService.getSkills().subscribe(skills => {
      this.skills = skills;
    });
  }

  handleAddSkill(): void {
    this.skillService.createSkill(this.newSkill).subscribe(newSkill => {
      this.skills.push(newSkill);
      this.newSkill = { id: '', name: '', proficiency: 0, userId: '' };
    });
  }

  startEdit(skill: SkillInterface): void {
    this.editingSkill = { ...skill };
  }

  handleUpdateSkill(): void {
    if (this.editingSkill) {
      this.skillService.updateSkill(this.editingSkill).subscribe(updatedSkill => {
        this.skills = this.skills.map(skill => skill.id === updatedSkill.id ? updatedSkill : skill);
        this.editingSkill = { id: '', name: '', proficiency: 0, userId: '' };
      });
    }
  }

  cancelEdit(): void {
    if (this.editingSkill) {
      this.editingSkill = { id: '', name: '', proficiency: 0, userId: '' };
    }
  }

  handleDeleteSkill(skill: SkillInterface): void {
    this.skillService.deleteSkill(skill.id).subscribe(() => {
      this.skills = this.skills.filter(s => s.id !== skill.id);
    });
    this.fetchSkills();
  }

}

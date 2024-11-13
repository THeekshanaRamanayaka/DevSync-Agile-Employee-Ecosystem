import { Injectable } from '@angular/core';
import { SkillInterface } from '../models/skill.interface';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  constructor() {}

  private skills: SkillInterface[] = [
    { id: '1', name: 'Angular', proficiency: 80, userId: 'user1' },
    { id: '2', name: 'React', proficiency: 75, userId: 'user1' },
    { id: '3', name: 'TypeScript', proficiency: 90, userId: 'user1' },
    { id: '4', name: 'Node.js', proficiency: 85, userId: 'user2' },
    { id: '5', name: 'Python', proficiency: 70, userId: 'user2' },
    { id: '6', name: 'Java', proficiency: 65, userId: 'user2' }
  ];

  getSkills(): Observable<SkillInterface[]> {
    return of(this.skills);
  }  

  createSkill(skill: SkillInterface): Observable<SkillInterface> {
    const newSkill = { ...skill, id: this.generateId() };
    this.skills.push(newSkill);
    return of(newSkill);
  }

  updateSkill(skill: SkillInterface): Observable<SkillInterface> {
    const index = this.skills.findIndex((s) => s.id === skill.id);
    if (index !== -1) {
      this.skills[index] = skill;
    }
    return of(skill);
  }

  deleteSkill(skillId: string): Observable<void> {
    this.skills = this.skills.filter((skill) => skill.id !== skillId);
    return of();
  }

  private generateId(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}

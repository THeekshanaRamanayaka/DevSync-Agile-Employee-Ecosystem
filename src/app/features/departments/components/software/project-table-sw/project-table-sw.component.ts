import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Participant {
  id: number;
  avatar: string;
}

interface Meeting {
  participants: Participant[];
  extraParticipants?: number;
}

interface Project {
  id: string;
  title: string;
  duration: string;
  meeting: Meeting;
  client: string;
  totalIncome: string;
}

@Component({
  selector: 'app-project-table-sw',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-table-sw.component.html',
  styleUrl: './project-table-sw.component.css'
})
export class ProjectTableSwComponent {
  projects: Project[] = [
    {
      id: 'PROJ00001',
      title: 'Official WebSite of Dialog',
      duration: '18 months',
      meeting: {
        participants: [
          { id: 1, avatar: '/assets/avatars/user1.jpg' },
          { id: 2, avatar: '/assets/avatars/user2.jpg' },
          { id: 3, avatar: '/assets/avatars/user3.jpg' },
          { id: 4, avatar: '/assets/avatars/user4.jpg' }
        ],
        extraParticipants: 2
      },
      client: 'Head',
      totalIncome: '+91 123 456 7890'
    },
    {
      id: 'PROJ00002',
      title: 'E-commerce Platform',
      duration: '12 months',
      meeting: {
        participants: [
          { id: 5, avatar: '/assets/avatars/user5.jpg' },
          { id: 6, avatar: '/assets/avatars/user6.jpg' },
          { id: 7, avatar: '/assets/avatars/user7.jpg' },
          { id: 8, avatar: '/assets/avatars/user8.jpg' },
          { id: 9, avatar: '/assets/avatars/user9.jpg' }
        ],
        extraParticipants: 3
      },
      client: 'TechCorp',
      totalIncome: '+91 987 654 3210'
    },
    {
      id: 'PROJ00003',
      title: 'Mobile App Development',
      duration: '9 months',
      meeting: {
        participants: [
          { id: 10, avatar: '/assets/avatars/user10.jpg' },
          { id: 11, avatar: '/assets/avatars/user11.jpg' },
          { id: 12, avatar: '/assets/avatars/user12.jpg' }
        ],
        extraParticipants: 1
      },
      client: 'StartupX',
      totalIncome: '+91 456 789 0123'
    }
  ];
}
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Meeting {
  date: Date;
  time: string;
  title: string;
  participants: Participant[];
  extraParticipants?: number;
}

interface Participant {
  id: number;
  avatar: string;
}

@Component({
  selector: 'app-meetings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meetings.component.html',
  styleUrl: './meetings.component.css'
})
export class MeetingsComponent {
  meetings: Meeting[] = [
    {
      date: new Date(2024, 8, 5),
      time: '9 AM',
      title: 'Sprint review',
      participants: [
        { id: 1, avatar: '/assets/avatars/user1.jpg' },
        { id: 2, avatar: '/assets/avatars/user2.jpg' },
        { id: 3, avatar: '/assets/avatars/user3.jpg' },
        { id: 4, avatar: '/assets/avatars/user4.jpg' }
      ],
      extraParticipants: 2
    },
    {
      date: new Date(2024, 8, 5),
      time: '9 AM',
      title: 'Sprint review',
      participants: [
        { id: 1, avatar: '/assets/avatars/user1.jpg' },
        { id: 2, avatar: '/assets/avatars/user2.jpg' },
        { id: 3, avatar: '/assets/avatars/user3.jpg' },
        { id: 4, avatar: '/assets/avatars/user4.jpg' }
      ],
      extraParticipants: 2
    },
    {
      date: new Date(2024, 8, 5),
      time: '9 AM',
      title: 'Sprint review',
      participants: [
        { id: 1, avatar: '/assets/avatars/user1.jpg' },
        { id: 2, avatar: '/assets/avatars/user2.jpg' },
        { id: 3, avatar: '/assets/avatars/user3.jpg' },
        { id: 4, avatar: '/assets/avatars/user4.jpg' }
      ],
      extraParticipants: 2
    }
    // ... other meetings data
    
  ];
  // Add a single meeting
  addMeeting(meeting: Meeting) {
    this.meetings.push(meeting);
  }

  // Add multiple meetings
  addMeetings(newMeetings: Meeting[]) {
    this.meetings.push(...newMeetings);
  }

  // Example usage:
  addNewMeeting() {
    const newMeeting: Meeting = {
      date: new Date(2024, 8, 9),
      time: '2 PM',
      title: 'Product Demo',
      participants: [
        { id: 13, avatar: '/assets/avatars/user13.jpg' },
        { id: 14, avatar: '/assets/avatars/user14.jpg' }
      ]
    };

    this.addMeeting(newMeeting);
  }

  // Add multiple meetings at once
  addBatchMeetings() {
    const newMeetings: Meeting[] = [
      {
        date: new Date(2024, 8, 10),
        time: '10 AM',
        title: 'Team Brainstorming',
        participants: [
          { id: 15, avatar: '/assets/avatars/user15.jpg' },
          { id: 16, avatar: '/assets/avatars/user16.jpg' },
          { id: 17, avatar: '/assets/avatars/user17.jpg' }
        ],
        extraParticipants: 3
      },
      {
        date: new Date(2024, 8, 10),
        time: '4 PM',
        title: 'Client Meeting',
        participants: [
          { id: 18, avatar: '/assets/avatars/user18.jpg' },
          { id: 19, avatar: '/assets/avatars/user19.jpg' }
        ]
      }
    ];

    this.addMeetings(newMeetings);
  }

  // Remove a meeting
  removeMeeting(index: number) {
    this.meetings.splice(index, 1);
  }

  // Update a meeting
  updateMeeting(index: number, updatedMeeting: Meeting) {
    this.meetings[index] = updatedMeeting;
  }

  // Sort meetings by date
  sortMeetingsByDate() {
    this.meetings.sort((a, b) => a.date.getTime() - b.date.getTime());
  }

  // Filter meetings for a specific date
  getMeetingsForDate(date: Date): Meeting[] {
    return this.meetings.filter(meeting => 
      meeting.date.toDateString() === date.toDateString()
    );
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface CalendarEvent {
  date: Date;
  title: string;
}

interface CalendarDay {
  date: Date | null;
  dayNumber: string;
  isCurrentDay: boolean;
  hasEvent: boolean;
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit {
  currentDate: Date;
  currentMonth: number;
  currentYear: number;
  calendarDays: CalendarDay[] = [];
  monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  events: CalendarEvent[] = [
    { date: new Date(2024, 10, 5), title: 'Event 1' },
    { date: new Date(2024, 10, 1), title: 'Event 2' }
  ];

  constructor() {
    this.currentDate = new Date();
    this.currentMonth = this.currentDate.getMonth();
    this.currentYear = this.currentDate.getFullYear();
  }

  ngOnInit(): void {
    this.renderCalendar();
  }

  renderCalendar(): void {
    this.clearCalendarGrid();
    this.updateMonthYearDisplay();
    
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();

    // Add empty days for the beginning of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      this.createDayElement('', false, false);
    }

    // Add actual days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(this.currentYear, this.currentMonth, i);
      const isCurrentDay = this.isSameDay(date, this.currentDate);
      const hasEvent = this.events.some(event => this.isSameDay(event.date, date));
      this.createDayElement(i.toString(), isCurrentDay, hasEvent, date);
    }

    // Add empty days to complete the last week if needed
    const totalDays = this.calendarDays.length;
    const remainingDays = 42 - totalDays; // 6 rows × 7 days = 42 total grid spaces
    for (let i = 0; i < remainingDays; i++) {
      this.createDayElement('', false, false);
    }
  }

  clearCalendarGrid(): void {
    this.calendarDays = [];
  }

  updateMonthYearDisplay(): string {
    return `${this.monthNames[this.currentMonth]} ${this.currentYear}`;
  }

  createDayElement(dayNumber: string, isCurrentDay: boolean, hasEvent: boolean, date: Date | null = null): void {
    const dayElement: CalendarDay = {
      date,
      dayNumber,
      isCurrentDay,
      hasEvent
    };
    this.calendarDays.push(dayElement);
  }

  isSameDay(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  }

  prevMonth(): void {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.renderCalendar();
  }

  nextMonth(): void {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.renderCalendar();
  }

  getMonthName(): string {
    return this.monthNames[this.currentMonth];
  }
}
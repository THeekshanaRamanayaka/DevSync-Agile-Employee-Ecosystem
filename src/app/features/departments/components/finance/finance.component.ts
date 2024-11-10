import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

interface Transaction {
  sender: {
    name: string;
    avatar: string;
  };
  id: string;
  date: string;
  status: 'success' | 'pending';
  amount: string;
  type: 'credit' | 'debit';
}

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxChartsModule],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.css'
})
export class FinanceComponent implements OnInit {
  // Chart configurations
  selectedPeriod: string = 'Last 7 Days';
  searchQuery: string = '';

  // Statistics
  totalIncome: number = 670000;
  totalExpenses: number = 180000;
  totalInvestment: number = 350000;
  
  incomeGrowth: number = 8;
  expensesGrowth: number = 12;
  investmentGrowth: number = 3;

  // Chart data
  balanceData = [
    { name: 'Mon', income: 22, expense: 10, investment: 8 },
    { name: 'Tue', income: 10, expense: 17, investment: 5 },
    { name: 'Wed', income: 15, expense: 7, investment: 4 },
    { name: 'Thur', income: 8, expense: 12, investment: 3 },
    { name: 'Fri', income: 18, expense: 5, investment: 6 }
  ];

  moneyData = [
    { name: 'Mon', current: 300, previous: 100 },
    { name: 'Tue', current: 450, previous: 200 },
    { name: 'Wed', current: 400, previous: 250 },
    { name: 'Thur', current: 500, previous: 300 },
    { name: 'Fri', current: 700, previous: 500 },
    { name: 'Sat', current: 500, previous: 600 },
    { name: 'Sun', current: 350, previous: 400 }
  ];

  // Transformed data for ngx-charts
  balanceChartData = [
    {
      name: 'Income',
      series: this.balanceData.map(item => ({
        name: item.name,
        value: item.income
      }))
    }
  ];

  moneyChartData = [
    {
      name: 'Current',
      series: this.moneyData.map(item => ({
        name: item.name,
        value: item.current
      }))
    }
  ];

  transactions: Transaction[] = [
    {
      sender: {
        name: 'Clara Sekar',
        avatar: '/assets/avatars/clara.jpg'
      },
      id: '#B00901',
      date: 'Jul, 20 . 2023',
      status: 'success',
      amount: '- $200,00',
      type: 'debit'
    },
    {
      sender: {
        name: 'Lee Haechan',
        avatar: '/assets/avatars/lee.jpg'
      },
      id: '#B00901',
      date: 'Jul, 20 . 2023',
      status: 'pending',
      amount: '+ $200,00',
      type: 'credit'
    }
  ];

  ngOnInit() {
    this.transformChartData();
  }

  transformChartData() {
    this.balanceChartData = [
      {
        name: 'Income',
        series: this.balanceData.map(item => ({
          name: item.name,
          value: item.income
        }))
      }
    ];

    this.moneyChartData = [
      {
        name: 'Current Period',
        series: this.moneyData.map(item => ({
          name: item.name,
          value: item.current
        }))
      }
    ];
  }

  onSearch(query: string) {
    // Implement search functionality
    console.log('Searching for:', query);
  }

  exportTransactions() {
    // Implement export functionality
    console.log('Exporting transactions...');
  }

  getTransactionClass(type: 'credit' | 'debit'): string {
    return type === 'credit' ? 'text-green-500' : 'text-red-500';
  }

  formatAmount(amount: string): string {
    return amount;
  }
}
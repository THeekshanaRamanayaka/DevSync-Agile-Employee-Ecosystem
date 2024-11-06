import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, registerables } from 'chart.js';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, FormsModule, NgChartsModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  selectedYear = '2023';
  selectedEndYear = '2024';
  totalTasks = 6393;
  tasksDone = 4863;
  tasksInProgress = 2848;

  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Done',
        data: [70, 45, 30, 58, 72, 65, 45, 70],
        backgroundColor: 'rgb(37, 99, 235)',
        borderColor: 'rgb(37, 99, 235)',
        borderWidth: 0,
        stack: 'stack0',
      },
      {
        label: 'Progress',
        data: [30, 25, 15, 24, 15, 20, 25, 20],
        backgroundColor: 'rgba(200, 220, 255, 0.5)',
        borderColor: 'rgba(200, 220, 255, 1)',
        borderWidth: 0,
        stack: 'stack0',
      }
    ] 
  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false
        }
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value) {
            return value + '%';
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          lineWidth: 1
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 20
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return context.dataset.label + ': ' + context.parsed.y + '%';
          }
        }
      }
    }
  };

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {
    // Initialization if needed
  }

  updateChart() {
    if (this.chart) {
      this.chart.update();
    }
  }
}
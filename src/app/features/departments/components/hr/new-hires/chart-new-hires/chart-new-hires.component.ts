import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import ApexCharts from 'apexcharts';

interface ChartOptions {
  chart: {
    height: string;
    maxWidth: string;
    type: string;
    fontFamily: string;
    dropShadow: {
      enabled: boolean;
    };
    toolbar: {
      show: boolean;
    };
  };
  tooltip: {
    enabled: boolean;
    x: {
      show: boolean;
    };
  };
  fill: {
    type: string;
    gradient: {
      opacityFrom: number;
      opacityTo: number;
      shade: string;
      gradientToColors: string[];
    };
  };
  dataLabels: {
    enabled: boolean;
  };
  stroke: {
    width: number;
  };
  grid: {
    show: boolean;
    strokeDashArray: number;
    padding: {
      left: number;
      right: number;
      top: number;
    };
  };
  series: Array<{
    name: string;
    data: number[];
    color: string;
  }>;
  xaxis: {
    categories: string[];
    labels: {
      show: boolean;
    };
    axisBorder: {
      show: boolean;
    };
    axisTicks: {
      show: boolean;
    };
  };
  yaxis: {
    show: boolean;
  };
}

@Component({
  selector: 'app-chart-new-hires',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart-new-hires.component.html',
  styleUrl: './chart-new-hires.component.css'
})
export class ChartNewHiresComponent {
  private options: ChartOptions = {
    chart: {
      height: "100%",
      maxWidth: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: 0,
      },
    },
    series: [
      {
        name: "New hires",
        data: [46, 22, 66, 24],
        color: "#1A56DB",
      },
    ],
    xaxis: {
      categories: ['01 week', '02 week', '03 week', '04 week'],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  };

  ngOnInit() {
    setTimeout(() => {
      const chartElement = document.getElementById("area-chart");
      if (chartElement && typeof ApexCharts !== 'undefined') {
        const chart = new ApexCharts(chartElement, this.options);
        chart.render();
      }
    });
  }
}

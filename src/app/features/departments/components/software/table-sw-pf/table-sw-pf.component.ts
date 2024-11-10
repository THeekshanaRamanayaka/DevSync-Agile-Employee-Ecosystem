import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
declare const ApexCharts: any;

interface SeriesData {
  name: string;
  data: number[];
  color: string;
}

interface ChartOptions {
  series: SeriesData[];
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
  legend: {
    show: boolean;
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
    labels: {
      formatter: (value: number) => string;
    };
  };
}


@Component({
  selector: 'app-table-sw-pf',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-sw-pf.component.html',
  styleUrl: './table-sw-pf.component.css'
})
export class TableSwPfComponent implements OnInit {
  options: ChartOptions = {
    series: [
      {
        name: "Engineer Managers",
        data: [82, 76, 80, 87],
        color: "#1A56DB", // Royal Blue
      },
      {
        name: "Tech Leads",
        data: [72, 79, 67, 85],
        color: "#7E3BF2", // Purple
      },
      {
        name: "Full-stack",
        data: [71, 68, 79, 83],
        color: "#F59E0B", // Amber
      },
      {
        name: "Front-end",
        data: [65, 72, 69, 79],
        color: "#10B981", // Emerald
      },
      {
        name: "Back-end",
        data: [80, 73, 85, 70],
        color: "#EC4899", // Pink
      },
      {
        name: "UI/UX",
        data: [85, 72, 67, 69],
        color: "#14B8A6", // Teal
      },
      {
        name: "QA",
        data: [58, 67, 73, 85],
        color: "#F97316", // Orange
      }
    ],
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
    legend: {
      show: true
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
        top: -26
      },
    },
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
      labels: {
        formatter: function (value: number): string {
          return value + '%';
        }
      }
    },
  };

  ngOnInit(): void {
    setTimeout(() => {
      const chartElement = document.getElementById("legend-chart");
      if (chartElement && typeof ApexCharts !== 'undefined') {
        const chart = new ApexCharts(chartElement, this.options);
        chart.render();
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
declare const ApexCharts: any;

interface DataPoint {
  x: string;
  y: number;
}

interface SeriesData {
  name: string;
  color: string;
  data: DataPoint[];
}

interface ChartOptions {
  colors: string[];
  series: SeriesData[];
  chart: {
    type: string;
    height: string;
    fontFamily: string;
    toolbar: {
      show: boolean;
    };
  };
  plotOptions: {
    bar: {
      horizontal: boolean;
      columnWidth: string;
      borderRadiusApplication: string;
      borderRadius: number;
    };
  };
  tooltip: {
    shared: boolean;
    intersect: boolean;
    style: {
      fontFamily: string;
    };
  };
  states: {
    hover: {
      filter: {
        type: string;
        value: number;
      };
    };
  };
  stroke: {
    show: boolean;
    width: number;
    colors: string[];
  };
  grid: {
    show: boolean;
    strokeDashArray: number;
  };
  dataLabels: {
    enabled: boolean;
  };
  legend: {
    show: boolean;
  };
  xaxis: {
    floating: boolean;
    labels: {
      show: boolean;
      style: {
        fontFamily: string;
        cssClass: string;
      };
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
  fill: {
    opacity: number;
  };
}

@Component({
  selector: 'app-table-sw',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-sw.component.html',
  styleUrl: './table-sw.component.css'
})
export class TableSwComponent implements OnInit {
  options: ChartOptions = {
    colors: ["#1A56DB", "#FDBA8C"],
    series: [
      {
        name: "Organic",
        color: "#1A56DB",
        data: [
          { x: "Managers", y: 5 },
          { x: "Tech Leads", y: 12 },
          { x: "Full-stack", y: 156 },
          { x: "Front-end", y: 78 },
          { x: "Back-end", y: 159 },
          { x: "UI/UX", y: 57 },
          { x: "QA", y: 111 },
        ],
      },
    ],
    chart: {
      type: "bar",
      height: "250px",
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        borderRadiusApplication: "end",
        borderRadius: 8,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
    },
    stroke: {
      show: true,
      width: 0,
      colors: ["transparent"],
    },
    grid: {
      show: false,
      strokeDashArray: 4,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      floating: false,
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
        }
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
    fill: {
      opacity: 1,
    },
  };

  ngOnInit() {
    setTimeout(() => {
      const chartElement = document.getElementById("column-chart");
      if (chartElement && typeof ApexCharts !== 'undefined') {
        const chart = new ApexCharts(chartElement, this.options);
        chart.render();
      }
    });
  }
}
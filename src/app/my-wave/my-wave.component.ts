import { Component } from '@angular/core';

@Component({
  selector: 'app-my-wave',
  templateUrl: './my-wave.component.html',
  styleUrls: ['./my-wave.component.css'],
  
  
})
export class MyWaveComponent {

  chartData = [
    {
      data: [330, 600, 260, 700],
      label: 'Account A'
    },
    {
      data: [120, 455, 100, 340],
      label: 'Account B'
    },
    {
      data: [45, 67, 800, 500],
      label: 'Account C'
    }
  ];
  chartLabels = [
    'January',
    'February',
    'March',
    'April'
  ];
  chartOptions = {
    responsive: true
  };
  columnChartOptions = {
    animationEnabled: true,
    title: {
      text: 'Angular Column Chart in Material UI Tabs',
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: 'column',
        dataPoints: [
          { label: 'apple', y: 10 },
          { label: 'orange', y: 15 },
          { label: 'banana', y: 25 },
          { label: 'mango', y: 30 },
          { label: 'grape', y: 28 },
        ],
      },
    ],
  };

  pieChartOptions = {
    animationEnabled: true,
    title: {
      text: 'Angular Pie Chart in Material UI Tabs',
    },
    theme: 'light2', // "light1", "dark1", "dark2"
    data: [
      {
        type: 'pie',
        dataPoints: [
          { label: 'apple', y: 10 },
          { label: 'orange', y: 15 },
          { label: 'banana', y: 25 },
          { label: 'mango', y: 30 },
          { label: 'grape', y: 28 },
        ],
      },
    ],
  };

  lineChartOptions = {
    animationEnabled: true,
    title: {
      text: 'Angular Line Chart in Material UI Tabs',
    },
    theme: 'light2', // "light1", "dark1", "dark2"
    data: [
      {
        type: 'line',
        dataPoints: [
          { label: 'apple', y: 10 },
          { label: 'orange', y: 15 },
          { label: 'banana', y: 25 },
          { label: 'mango', y: 30 },
          { label: 'grape', y: 28 },
        ],
      },
    ],
  };
  
}

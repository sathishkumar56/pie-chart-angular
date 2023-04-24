import { Component, ViewChild } from '@angular/core';
import { ApexNonAxisChartSeries, ApexChart, ApexResponsive, ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
	series: ApexNonAxisChartSeries;
	chart: ApexChart;
	responsive: ApexResponsive[];
	labels: any;
  };

@Component({
  selector: 'app-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.css']
})
export class MyDoughnutChartComponent  {
	// @ViewChild("chart") chart: ChartComponent;



	// public chartOptions: Partial<ChartOptions>;
  
	// constructor() {
	//   this.chartOptions = {
	// 	series: [44, 55, 13, 43, 22],
	// 	chart: {
	// 	  type: "donut"
	// 	},
	// 	labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
	// 	responsive: [
	// 	  {
	// 		breakpoint: 480,
	// 		options: {
	// 		  chart: {
	// 			width: 200
	// 		  },
	// 		  legend: {
	// 			position: "bottom"
	// 		  }
	// 		}
	// 	  }
	// 	]
	//   };
// }
  
  chartOptions = {
	  animationEnabled: true,
	  title: {
		text: "Sales by Department"
	  },
	  data: [{
		type: "pie",
		startAngle: -90,
		indexLabel: "{name}: {y}",
		yValueFormatString: "#,###.##'%'",
		dataPoints: [
		  { y: 14.1, name: "Toys" },
		  { y: 28.2, name: "Electronics" },
		  { y: 14.4, name: "Groceries" },
		  { y: 43.3, name: "Furniture" }
		]
	  }]
	}	
}
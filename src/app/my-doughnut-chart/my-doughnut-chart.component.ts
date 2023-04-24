import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
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

	//step2
	public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
	public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
		{ data: [ 350, 450, 100 ], label: 'Series A' },
		{ data: [ 50, 150, 120 ], label: 'Series B' },
		{ data: [ 250, 130, 70 ], label: 'Series C' }
	  ];
  
	public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
	  responsive: false
	};
  

	//step1
	
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
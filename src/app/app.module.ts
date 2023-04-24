import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartsModule } from 'ng2-charts';
import { MyWaveComponent } from './my-wave/my-wave.component';
import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
import { MatTabsModule } from '@angular/material/tabs';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;


@NgModule({
  declarations: [
    AppComponent,
    MyBarChartComponent,
    MyDoughnutChartComponent,
    CanvasJSChart,
    MyWaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule ,
    NgApexchartsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

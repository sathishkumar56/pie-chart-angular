import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { MyWaveComponent } from './my-wave/my-wave.component';

const routes: Routes = [
    {path: 'bar-chart', component: MyBarChartComponent},
    {path: 'doughnut-chart', component: MyDoughnutChartComponent},
    {path: 'wave-chart', component: MyWaveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

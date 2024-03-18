import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForecastComponent } from './forecast/forecast.component';
import { environment } from '@environments/environment';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: `${environment.appName} - Home`,
    data: {
      breadcrumb: {
        label: 'Home',
      },
    },
  },
  {
    path: 'forecast',
    component: ForecastComponent,
    title: `${environment.appName} - Forecast`,
    data: {
      breadcrumb: {
        alias: 'locationName',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherRoutingModule {}

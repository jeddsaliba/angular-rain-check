import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { HomeComponent } from './home/home.component';
import { ForecastComponent } from './forecast/forecast.component';
import { SharedModule } from '@shared/shared.module';
import { AutocompleteModule } from '@components/form/autocomplete/autocomplete.module';
import { DatatableModule } from '@components/datatable/datatable.module';
import { InputModule } from '@components/form/input/input.module';


@NgModule({
  declarations: [
    HomeComponent,
    ForecastComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    SharedModule,
    AutocompleteModule,
    DatatableModule,
    InputModule
  ]
})
export class WeatherModule { }

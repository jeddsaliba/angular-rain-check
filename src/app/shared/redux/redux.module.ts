import { NgModule } from '@angular/core';
import { environment } from '@environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthEffect } from '@redux/auth/auth.effect';
import { authReducer } from '@redux/auth/auth.reducer';
import { PromptEffect } from './prompt/prompt.effect';
import { weatherReducer } from './weather/weather.reducer';
import { WeatherEffect } from './weather/weather.effect';
import { LocationEffect } from './location/location.effect';
import { locationReducer } from './location/location.reducer';
import { sharedReducer } from './shared/shared.reducer';
import { SharedEffect } from './shared/shared.effect';
import { datatableReducer } from './datatable/datatable.reducer';
import { DataTableEffect } from './datatable/datatable.effect';

const ReduxModules = [
  StoreModule.forRoot({
    auth: authReducer,
    weather: weatherReducer,
    location: locationReducer,
    shared: sharedReducer,
    datatable: datatableReducer
  }),
  EffectsModule.forRoot([AuthEffect, PromptEffect, WeatherEffect, LocationEffect, SharedEffect, DataTableEffect]),
  !environment.production
    ? StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: environment.production, // Restrict extension to log-only mode
      })
    : [],
];
@NgModule({
  imports: [ReduxModules],
})
export class ReduxModule {}

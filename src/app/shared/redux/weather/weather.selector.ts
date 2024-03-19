import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Weather } from "./weather.model";

const weatherState = createFeatureSelector<Weather>('weather');

export const selectWeatherForecast = createSelector(weatherState, (state: Weather) => state.forecast);
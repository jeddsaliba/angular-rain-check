import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Weather } from "./weather.model";

const weatherState = createFeatureSelector<Weather>('weather');

export const selectWeatherDetails = createSelector(weatherState, (state: Weather) => state.weather);
export const selectGeolocation = createSelector(weatherState, (state: Weather) => state.geolocation);
export const selectWeatherForecast = createSelector(weatherState, (state: Weather) => state.forecast);
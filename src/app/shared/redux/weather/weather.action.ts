import { createAction } from "@ngrx/store";
import { WeatherType } from "./weather.type";

export const getWeatherDetails = createAction(WeatherType.DETAILS, (payload: any) => ({payload}));
export const getWeatherDetailsSuccess = createAction(WeatherType.DETAILS_SUCCESS, (payload: any) => ({payload}));
export const getWeatherDetailsCancel = createAction(WeatherType.DETAILS_CANCEL);

export const getGeolocation = createAction(WeatherType.GEOLOCATION, (payload: any) => ({payload}));
export const getGeolocationSuccess = createAction(WeatherType.GEOLOCATION_SUCCESS, (payload: any) => ({payload}));
export const getGeolocationCancel = createAction(WeatherType.GEOLOCATION_CANCEL);

export const getWeatherForecastByGeolocation = createAction(WeatherType.FORECAST, (payload: any) => ({payload}));
export const getWeatherForecastByGeolocationSuccess = createAction(WeatherType.FORECAST_SUCCESS, (payload: any) => ({payload}));
export const getWeatherForecastByGeolocationCancel = createAction(WeatherType.FORECAST_CANCEL);
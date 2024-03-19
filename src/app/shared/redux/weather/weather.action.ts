import { createAction } from "@ngrx/store";
import { WeatherType } from "./weather.type";

export const getWeatherForecastByGeolocation = createAction(WeatherType.FORECAST, (payload: any) => ({payload}));
export const getWeatherForecastByGeolocationSuccess = createAction(WeatherType.FORECAST_SUCCESS, (payload: any) => ({payload}));
export const getWeatherForecastByGeolocationCancel = createAction(WeatherType.FORECAST_CANCEL);
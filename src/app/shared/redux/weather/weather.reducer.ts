import { createReducer, on } from "@ngrx/store";
import { WeatherState } from "./weather.state";
import { getGeolocationCancel, getGeolocationSuccess, getWeatherDetailsSuccess, getWeatherForecastByGeolocationSuccess } from "./weather.action";
import { titleCase } from "title-case";

const _weatherReducer = createReducer(
    WeatherState,
    on(getWeatherDetailsSuccess, (state, {payload}) => {
        return {
            ...state,
            weather: {
                name: payload.name,
                date: new Date(),
                temperature: payload.main.temp,
                description: payload.weather[0].description,
                main: payload.weather[0].main,
                pressure: payload.main.pressure,
                humidity: payload.main.humidity
            }
        }
    }),
    on(getGeolocationSuccess, (state, {payload}) => {
        return {
            ...state,
            geolocation: {
                lat: payload[0].lat,
                lon: payload[0].lon,
                name: payload[0].name,
                state: payload[0].state
            }
        }
    }),
    on(getGeolocationCancel, () => {
        return {
            ...WeatherState
        }
    }),
    on(getWeatherForecastByGeolocationSuccess, (state, {payload}) => {
        const { list, city } = payload;
        const forecast = list.map((item: any) => {
            return {
                date: item.dt_txt,
                temperature: item.main.temp,
                description: titleCase(item.weather[0].description, { sentenceCase: true}),
                main: item.weather[0].main,
                pressure: item.main.pressure,
                humidity: item.main.humidity,
                name: city.name
            }
        });
        return {
            ...state,
            forecast
        }
    })
)
export function weatherReducer(state: any, action: any) {
    return _weatherReducer(state, action);
}
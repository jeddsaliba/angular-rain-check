import { createReducer, on } from "@ngrx/store";
import { WeatherState } from "./weather.state";
import { getWeatherForecastByGeolocationSuccess } from "./weather.action";
import { titleCase } from "title-case";

const _weatherReducer = createReducer(
    WeatherState,
    on(getWeatherForecastByGeolocationSuccess, (state, {payload}) => {
        const { list } = payload;
        const forecast = list.map((item: any) => {
            return {
                date: item.dt_txt,
                temperature: item.main.temp,
                description: titleCase(item.weather[0].description, { sentenceCase: true}),
                main: item.weather[0].main,
                pressure: item.main.pressure,
                humidity: item.main.humidity
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
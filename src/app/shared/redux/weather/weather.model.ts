export interface WeatherModel {
    name: string,
    date: Date,
    temperature: number,
    description: string,
    main: string,
    pressure: number,
    humidity: number
}
export interface GeolocationModel {
    lat: number,
    lon: number,
    name: string,
    state: string
}
export interface ForecastModel {
    name: string,
    date: any,
    temperature: number,
    description: string,
    main: string,
    pressure: number,
    humidity: number
}
export interface Weather {
    weather: WeatherModel | null,
    geolocation: GeolocationModel | null,
    forecast: ForecastModel[] | []
}
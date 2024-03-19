export interface ForecastModel {
    date: unknown,
    temperature: number,
    description: string,
    main: string,
    pressure: number,
    humidity: number
}
export interface Weather {
    forecast: ForecastModel[] | []
}
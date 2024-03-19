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
    forecast: ForecastModel[] | []
}
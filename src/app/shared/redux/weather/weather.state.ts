import { ForecastModel, GeolocationModel, Weather, WeatherModel } from './weather.model';

export const WeatherForecastTableHeads: any = [
    {
        key: 'date',
        label: 'Date (mm/dd/yyyy)',
        pipe: 'date',
        pipeFormat: 'MM/dd/yyyy',
        mobileView: true,
    },
    {
        key: 'date',
        label: 'Time',
        pipe: 'date',
        pipeFormat: 'hh:mm a',
        mobileView: false,
    },
    {
        key: 'temperature',
        label: 'Temperature (F)',
        pipe: 'number',
        mobileView: true,
    },
    {
        key: 'description',
        label: 'Description',
        mobileView: false,
    },
    {
        key: 'main',
        label: 'Main',
        mobileView: false
    },
    {
        key: 'pressure',
        label: 'Pressure',
        pipe: 'number',
        mobileView: false
    },
    {
        key: 'humidity',
        label: 'Humidity',
        pipe: 'number',
        mobileView: false
    },
];
const WeatherInitialState: WeatherModel = {
    name: '',
    date: new Date(),
    temperature: 0,
    description: '',
    main: '',
    pressure: 0,
    humidity: 0
};

const GeolotationInitialState: GeolocationModel = {
    lat: 0,
    lon: 0,
    name: '',
    state: ''
}

const ForecastInitialState: ForecastModel = {
    name: '',
    date: '',
    temperature: 0,
    description: '',
    main: '',
    pressure: 0,
    humidity: 0
}
export const WeatherState: Weather = {
    weather: WeatherInitialState,
    geolocation: GeolotationInitialState,
    forecast: [ForecastInitialState]
};

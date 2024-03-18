export enum WeatherType {
    DETAILS = '[WEATHER API] Details',
    DETAILS_SUCCESS = '[WEATHER API] Details Success',
    DETAILS_CANCEL = '[WEATHER API] Details Cancel',

    GEOLOCATION = '[WEATHER API] Geolocation',
    GEOLOCATION_SUCCESS = '[WEATHER API] Geolocation Success',
    GEOLOCATION_CANCEL = '[WEATHER API] Geolocation Cancel',

    FORECAST = '[WEATHER API] Weather forecast by geolocation',
    FORECAST_SUCCESS = '[WEATHER API] Weather forecast by geolocation Success',
    FORECAST_CANCEL = '[WEATHER API] Weather forecast by geolocation Cancel',
}
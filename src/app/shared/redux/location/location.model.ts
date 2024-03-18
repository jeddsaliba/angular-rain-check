export interface LocationModel {
    address_line1: string,
    address_line2: string,
    category: string,
    country: string,
    country_code: string,
    formatted: string,
    lat: number,
    lon: number,
    name: string
}
export interface Location {
    location: LocationModel,
    locations: LocationModel[],
}
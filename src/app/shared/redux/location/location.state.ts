import { LocationModel, Location } from "./location.model";

const LocationInitialState: LocationModel = {
    address_line1: '',
    address_line2: '',
    category: '',
    country: '',
    country_code: '',
    formatted: '',
    lat: 0,
    lon: 0,
    name: ''
};
export const LocationState: Location = {
    location: LocationInitialState,
    locations: [LocationInitialState]
};
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Location } from "./location.model";

const locationState = createFeatureSelector<Location>('location');

export const selectAutocomplete = createSelector(locationState, (state: Location) => state.locations);
export const selectLocation = createSelector(locationState, (state: Location) => state.location);
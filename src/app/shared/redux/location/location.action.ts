import { createAction } from "@ngrx/store";
import { LocationType } from "./location.type";

export const getAutocomplete = createAction(LocationType.AUTOCOMPLETE, (payload: any) => ({payload}));
export const getAutocompleteSuccess = createAction(LocationType.AUTOCOMPLETE_SUCCESS, (payload: any) => ({payload}));
export const getAutocompleteCancel = createAction(LocationType.AUTOCOMPLETE_CANCEL);

export const setLocation = createAction(LocationType.SET_LOCATION, (payload: any) => ({payload}));
export const setLocationSuccess = createAction(LocationType.SET_LOCATION_SUCCESS, (payload: any) => ({payload}));
export const setLocationCancel = createAction(LocationType.SET_LOCATION_CANCEL);
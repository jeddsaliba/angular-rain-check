import { createReducer, on } from "@ngrx/store";
import { LocationState } from "./location.state";
import { getAutocompleteCancel, getAutocompleteSuccess, setLocationSuccess } from "./location.action";

const _locationReducer = createReducer(
    LocationState,
    on(getAutocompleteSuccess, (state, { payload }) => {
        return {
            ...state,
            locations: payload
        }
    }),
    on(getAutocompleteCancel, (state) => {
        return {
            ...state,
            ...LocationState
        }
    }),
    on(setLocationSuccess, (state, { payload }) => {
        return {
            ...state,
            location: payload
        }
    }),
)
export function locationReducer(state: any, action: any) {
    return _locationReducer(state, action);
}
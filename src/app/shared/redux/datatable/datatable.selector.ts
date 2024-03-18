import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DataTableModel } from "./datatable.model";

const datatableState = createFeatureSelector<DataTableModel>('datatable');
export const selectTableData = createSelector(datatableState, (state: DataTableModel) => state.data);
export const selectTableHeads = createSelector(datatableState, (state: DataTableModel) => state.table_heads);
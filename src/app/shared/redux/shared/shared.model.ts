export interface SelectOptionModel {
    label: string,
    value: string | number | any
}
export interface Shared {
    select_options: SelectOptionModel[],
    show_loader: boolean,
    snackbar_message: string
}
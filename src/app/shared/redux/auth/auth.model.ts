export interface AuthUserModel {
    name: string,
    email: string,
    nickname: string,
    picture: string,
    url: string
}
export interface Auth {
    user: AuthUserModel,
    authenticated: boolean,
    access_token: string | null
}
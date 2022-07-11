import { Classification } from './classification'

export interface IUser {
    givenName: string
    familyName: string
    authorization: Classification
}

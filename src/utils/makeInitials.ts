import { IUser } from '../types/user'

export const makeInitials = (user: IUser): string => {
    return `${user.givenName[0]}${user.familyName[0]}`
}

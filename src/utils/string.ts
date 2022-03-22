import { Classification } from '../types/classification'
import { IUser } from '../types/user'

export const makeInitials = (user: IUser): string => {
    return `${user.givenName[0]}${user.familyName[0]}`
}

export const prettyPrintClassification = (classification: Classification): string => {
    return `${classification[0]}${classification.toLowerCase().substring(1)}`
}

export const makeClassificationClassName = (classification: Classification): string => {
    return `--${classification.toLowerCase()}`
}

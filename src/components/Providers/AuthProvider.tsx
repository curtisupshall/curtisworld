import React from 'react'

import { IUser } from '../../types/user'

interface IAuthProviderProps {
    children: any
    user: IUser
}

export const AuthContext: React.Context<IUser> = React.createContext(null)

const AuthProvider = (props: IAuthProviderProps) => {
    const { user, ...rest} = props
    return (
        <AuthContext.Provider
            value={props.user}
            {...rest}
        />
    )
}

export default AuthProvider

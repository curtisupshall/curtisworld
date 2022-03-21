import React from 'react'

import {
    Avatar,
    Button,
    Typography
} from '@mui/material'

import { IUser } from '../types/user'
import { makeInitials } from '../utils/makeInitials'

import { AuthContext } from './Providers/AuthProvider'

const TopBar = () => {
    const user: IUser = React.useContext(AuthContext)
    const isLoggedIn: boolean = Boolean(user)

    return (
        <header className='topbar'>
            <div className='topbar__inner'>
                <h6>Curtis' World</h6>
                <div className='topbar__auth'>
                    {isLoggedIn ? <>
                        <Avatar>{makeInitials(user)}</Avatar>
                        <Typography color='inherit' variant='body2'>{`${user.givenName}`}</Typography>
                    </> : (
                        <Button>Sign In</Button>
                    )}
                </div>
            </div>
        </header>
    )
}

export default TopBar

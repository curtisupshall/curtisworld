import axios from 'axios'
import React from 'react'

import {
    Avatar,
    Button,
    Typography
} from '@mui/material'

import { IUser } from '../types/user'
import { makeInitials } from '../utils/makeInitials'

import { AuthContext } from '../components/Providers/AuthProvider' 
import Box, { BoxContent } from '../components/Box'
import LoginModal from '../components/Modals/Login'

const Home = () => {

    const user: IUser = React.useContext(AuthContext)

    React.useEffect(() => {
        return
    }, [])

    return (
        <div className='home'>
            <div>
                <Box className=''>
                    <Avatar>{makeInitials(user)}</Avatar>
                    <Typography color='inherit' variant='h4'>{user.givenName} {user.familyName}</Typography>
                    <Typography color='inherit' variant='overline'>Authorization</Typography>
                    <Typography color='inherit' variant='h5'>{user.authorization}</Typography>
                </Box>
                <Box>
                    <Typography color='inherit' variant='h5'>Your Credential</Typography>
                    <BoxContent>
                        <Typography color='inherit' variant='body1'>Your verifiable credential is accessed here.</Typography>
                    </BoxContent>
                </Box>
            </div>
            <div>
                <LoginModal />
            </div>
        </div>
    )
}

export default Home

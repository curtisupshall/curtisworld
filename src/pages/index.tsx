import axios from 'axios'
import React from 'react'

import { Box, Typography } from '@mui/material'

import LoginModal from '../components/Modals/Login'

const Home = () => {

    React.useEffect(() => {
        return
    }, [])

    return (
        <div className='home'>
            <Box display='flex'>
                <div>
                    <Typography variant='h2'>App</Typography>
                </div>
                <div>
                    <Typography variant='h4'>Sign in</Typography>
                    <LoginModal />
                </div>
            </Box>
        </div>
    )
}

export default Home

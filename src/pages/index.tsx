import axios from 'axios'
import React from 'react'

import { Box, Typography } from '@material-ui/core'

import LoginModal from '../components/Modals/Login'

const Home = () => {

    React.useEffect(() => {
        const res = axios.get('/api/test').then((res, err) => {
            console.log('res:', res)
        })
    }, [])

    return (
        <div className='home'>
            <Box flex>
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

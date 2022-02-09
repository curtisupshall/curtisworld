import axios from 'axios'
import React from 'react'

import {
    Box,
    Button,
    Typography
} from '@mui/material'

import LoginModal from '../components/Modals/Login'

const Home = () => {

    React.useEffect(() => {
        return
    }, [])

    return (
        <Box className='home' display='flex'>
            <div>
                <Typography variant='h2'>App</Typography>
                <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ut, ex nulla tenetur culpa molestias magnam facere veniam quas quos maxime natus ducimus excepturi, amet magni quisquam harum veritatis maiores.</Typography>
                <Button>Option 1</Button>
                <Button>Option 2</Button>
                <Button>Option 3</Button>
            </div>
            <div>
                <Typography variant='h4'>Your Credential</Typography>
                <Typography variant='body1'>Your verifiable credential is accessed here.</Typography>
                <LoginModal />
            </div>
        </Box>
    )
}

export default Home

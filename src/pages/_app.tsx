import '../assets/styles/main.scss'

import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

import { IUser } from '../types/user'

import AuthProvider from '../components/Providers/AuthProvider'
import TopBar from '../components/TopBar'
import { createTheme, Theme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/styles'
import { CssBaseline, ScopedCssBaseline } from '@mui/material'
import { KeycloakProvider } from 'react-keycloak'


const TEST_USER: IUser = {
    givenName: 'Curtis',
    familyName: 'Upshall',
    authorization: 'RESTRICTED'
}

const CustomApp = (props: AppProps) => {
    const { Component, pageProps } = props

    return (
        <>
            <Head>
                <meta charSet='UTF-8' />
                <meta name='description' content="Curtis' World" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet" />
                <title>Curtis' World'</title>
            </Head>

                    <div id='curtis-world'>
                        <KeycloakProvider >
                            <AuthProvider user={TEST_USER}>
                                <div>
                                    <TopBar />
                                    <Component {...pageProps} />
                                </div>
                            </AuthProvider>
                        </KeycloakProvider>
                    </div>

        </>
    )
}

export default CustomApp

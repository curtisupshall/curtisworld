import '../assets/styles/main.scss'

import { AppProps as NextAppProps, AppContext } from 'next/app'
import Head from 'next/head'
import React from 'react'

import { IUser } from '../types/user'

import AuthProvider from '../components/Providers/AuthProvider'
import TopBar from '../components/TopBar'
import { createTheme, Theme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/styles'
import { CssBaseline, ScopedCssBaseline } from '@mui/material'

// Keycloak
import Keycloak, { KeycloakConfig } from 'keycloak-js'
import { SSRKeycloakProvider, SSRCookies } from '@react-keycloak-fork/ssr'
import { IncomingMessage } from 'http'
import cookie from 'cookie'


const TEST_USER: IUser = {
    givenName: 'Curtis',
    familyName: 'Upshall',
    authorization: 'RESTRICTED'
}

const config: KeycloakConfig = {
    clientId: 'curtis-world-verifier',
    realm: 'curtis-world',
    url: 'https://sso.quartech.app/auth'
}

interface AppProps extends NextAppProps {
    cookies: any
}

const CustomApp = (props: AppProps) => {
    const { Component, pageProps, cookies } = props

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
                        <SSRKeycloakProvider
                            keycloakConfig={config}
                            persistor={SSRCookies(cookies)}
                            initOptions={{ onLoad: 'login-required' }}
                        >
                            <AuthProvider user={TEST_USER}>
                                <div>
                                    <TopBar />
                                    <Component {...pageProps} />
                                </div>
                            </AuthProvider>
                        </SSRKeycloakProvider>
                    </div>

        </>
    )
}

function parseCookies(req?: IncomingMessage) {
    if (!req || !req.headers) {
        return {}
    }
    
    return cookie.parse(req.headers.cookie || '')
}
  
export const getInitialProps = async (context: AppContext) => {
    // Extract cookies from AppContext
    return {
        cookies: parseCookies(context?.ctx?.req),
    }
}

export default CustomApp

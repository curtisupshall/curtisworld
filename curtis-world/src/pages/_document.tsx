import { Html, Head, Main, NextScript } from 'next/document'

import { createTheme, Theme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/styles'
import { CssBaseline, ScopedCssBaseline } from '@mui/material'

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const CustomDocument = () => {
    return (
        <Html>
            <ThemeProvider theme={darkTheme}>
                {/*<ScopedCssBaseline enableColorScheme>*/}
                    <Head />
                    <body>
                        <Main />
                        <NextScript />
                    </body>
                {/*</ScopedCssBaseline>*/}
            </ThemeProvider>
        </Html>
    )
}

export default CustomDocument

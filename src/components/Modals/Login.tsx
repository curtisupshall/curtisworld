import React from 'react'

import {
    Button,
    Collapse,
    Dialog,
    DialogContent,
    DialogActions,
    FormGroup,
    Typography,
    DialogContentText,
    DialogTitle,
    TextField
} from '@material-ui/core'
import LoadingButton from '../LoadingButton'

import QRCode from '../QRCode'

const exampleData: Record<string, string> = {
    name: 'Curtis Upshall',
    email: 'curtis.upshall@gmail.com'
}

const Login = () => {
    const [loadingLogin, setLoadingLogin] = React.useState(false)

    return (
        <Dialog open={true}>
            <DialogTitle>App Sign-in</DialogTitle>
            <DialogContent>
                <DialogContentText>Generate a QR code to authenticate with the app.</DialogContentText>
                <Collapse in={true}>
                    <QRCode />
                </Collapse>
                <Collapse in={true}>
                    <FormGroup>
                        {Object.keys(exampleData).map((key: string) => (
                            <TextField
                                disabled
                                key={key}
                                value={exampleData[key]}
                                label={key}
                                InputLabelProps={{ style: { fontFamily: 'monospace' }}}
                                margin='dense'
                            />
                        ))}
                    </FormGroup>
                </Collapse>
            </DialogContent>
            <DialogActions>
                <LoadingButton loading={loadingLogin} variant='contained' color='primary'>Login</LoadingButton>
            </DialogActions>
        </Dialog>
    )
}

export default Login

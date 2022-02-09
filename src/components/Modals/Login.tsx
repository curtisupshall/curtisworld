import React, { SetStateAction } from 'react'

import {
    Button,
    Collapse,
    Dialog,
    DialogContent,
    DialogActions,
    FormGroup,
    Icon,
    Typography,
    DialogContentText,
    DialogTitle,
    Paper,
    TextField
} from '@mui/material'
import LoadingButton from '../LoadingButton'

import QRCode from '../QRCode'
import truncateFields, { ITruncatedData} from '../../utils/truncateFields'

type DemoState =
    | 'signed-out'
    | 'generated'
    | 'scanned'

const exampleData: Record<string, string> = {
    region: 'BC',
    family_name: 'Upshall',
    country: 'Canada',
    issued: '01/26/2022 22:23:20',
    postal_code: 'V8V 1T5',
    street_address: '8 - 415 Superior Street',
    birthdate: '1999-01-19',
    locality: 'Victoria',
    given_name: 'Curtis'
}

const Login = () => {
    const [loadingLogin, setLoadingLogin] = React.useState(false)
    const [showHidden, setShowHidden] = React.useState(false)
    const { visible, hidden } = truncateFields(exampleData)
    const [showCredentialFields, setShowCredentialFields] = React.useState(true)
    const [demoState, setDemoState] = React.useState('signed-out')
    const hasHiddenFields: boolean = Object.keys(hidden).length > 0

    const handleClickShowHidden = () => {
        setShowHidden(!showHidden)
    }

    const renderCredentialFields = (data: Record<string, string>) => (
        <FormGroup>
            {Object.keys(data).map((key: string) => (
                <TextField
                    disabled
                    key={key}
                    value={data[key]}
                    label={key}
                    InputLabelProps={{ style: { fontFamily: 'monospace' }}}
                    margin='dense'
                />
            ))}
        </FormGroup>
    )

    let qrCodeColor = '#444'

    if (demoState === 'generated') {
        qrCodeColor = 'blue'
    } else if (demoState === 'scanned') {
        qrCodeColor = 'green'
    }

    return (
        <Paper>
            <DialogTitle>App Sign-in</DialogTitle>
            <DialogContent>
                <DialogContentText>Generate a QR code to authenticate with the app.</DialogContentText>
                <Collapse in={true}>
                    <QRCode
                        qrcode='1'
                        // color={qrCodeColor}
                    />
                </Collapse>
                <Collapse in={showCredentialFields}>
                    {renderCredentialFields(visible)}
                </Collapse>
                <Collapse in={showCredentialFields && showHidden && hasHiddenFields}>
                    {renderCredentialFields(hidden)}
                </Collapse>
                {hasHiddenFields && (
                    <Button
                        color='primary'
                        variant='text'
                        endIcon={showHidden ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>}
                        onClick={() => handleClickShowHidden()}
                    >
                        {showHidden ? 'Hide fields' : `Show ${Object.keys(hidden).length} more fields`}
                    </Button>
                )}
            </DialogContent>
            <DialogActions>
                <LoadingButton loading={loadingLogin} variant='contained' color='primary'>Login</LoadingButton>
            </DialogActions>
        </Paper>
    )
}

export default Login

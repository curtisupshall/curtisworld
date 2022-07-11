import React from 'react'

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

import truncateFields, { ITruncatedData} from '../utils/truncateFields'

interface ICredentialListProps {
    credentials: Record<string, string>
}

const CredentialList = (props: ICredentialListProps) => {
    const { credentials } = props

    const [showHidden, setShowHidden] = React.useState(false)
    const { visible, hidden } = truncateFields(credentials)
    const hasHiddenFields: boolean = hidden && Object.keys(hidden).length > 0

    
    const handleClickShowHidden = () => {
        setShowHidden(!showHidden)
    }

    const renderCredentialFields = (data: Record<string, string>) => (
        data ? (
            <FormGroup>
                {Object.keys(data).map((key: string) => (
                    <TextField
                        disabled
                        key={key}
                        value={data[key]}
                        label={key}
                        InputLabelProps={{ style: { fontFamily: 'monospace' }}}
                        margin='dense'
                        size='small'
                    />
                ))}
            </FormGroup>
        ) : null
        
    )


    return (
        <div className='credential-list'>
            {renderCredentialFields(visible)}
            <Collapse in={showHidden && hasHiddenFields}>
                {renderCredentialFields(hidden)}
            </Collapse>
            {hasHiddenFields && (
                <Button
                    color='inherit'
                    variant='text'
                    endIcon={showHidden ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>}
                    onClick={() => handleClickShowHidden()}
                >
                    {showHidden ? 'Hide fields' : `Show ${Object.keys(hidden).length} more fields`}
                </Button>
            )}
        </div>
    )
}

export default CredentialList

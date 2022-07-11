import React from 'react'

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField
} from '@mui/material'

import { IDocument } from '../../types/document'
// import ClassificationText from '../ClassificationText'

const EMPTY_DOCUMENT: IDocument = {
    name: '',
    classification: 'OPEN',
    contents: ''
}

interface IDocumentDialogProps {
    open: boolean
    document: IDocument
    onClose: () => void
}

const DocumentDialog = (props: IDocumentDialogProps) => {
    const { open } = props
    const document = props.document || EMPTY_DOCUMENT
    const { name, classification, contents } = document

    return (
        <Dialog open={open} fullWidth>
            <DialogTitle>{name}</DialogTitle>
            <DialogContent>
                <TextField
                    variant='filled'
                    label='Classification'
                    value={classification}
                    disabled
                    margin='normal'
                />                
                <TextField
                    multiline
                    value={contents}
                    label='Contents'
                    disabled
                    variant='filled'
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.onClose()}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DocumentDialog

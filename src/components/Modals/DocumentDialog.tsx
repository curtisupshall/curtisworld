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
        <Dialog open={open}>
            <DialogTitle>{name}</DialogTitle>
            <DialogContent>
                <TextField multiline value={contents} label='Contents' disabled variant='filled' />
            </DialogContent>
            <DialogActions><Button onClick={() => props.onClose()}>Close</Button></DialogActions>
        </Dialog>
    )
}

export default DocumentDialog

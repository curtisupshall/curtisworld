import React from 'react'
import { IDocument } from '../types/document'

import {
    List,
    ListItem,
    ListItemText
} from '@mui/material'
import { prettyPrintClassification } from '../utils/string'
import ClassificationText from './ClassificationText'

interface IDocumentListProps {
    documents: IDocument[]
    onSelect: (document: IDocument) => void
}

const DocumentList = (props: IDocumentListProps) => {
    const { documents, onSelect } = props

    const renderDocument = (document: IDocument, key: string) => (
        <ListItem button onClick={() => onSelect(document)} key={key}>
            <ListItemText
                primary={document.name}
                secondary={<ClassificationText>{document.classification}</ClassificationText>}
            />
        </ListItem>
    )

    return (
        <List>
            {documents.map((document: IDocument, index: number) => renderDocument(document, String(index)))}
        </List>
    )
}

export default DocumentList

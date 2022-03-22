import axios from 'axios'
import React from 'react'

import {
    Avatar,
    Button,
    Typography
} from '@mui/material'

// Remove import after implementing API call
import { SAMPLE_DOCUMENTS } from './api/documents'

import { IUser } from '../types/user'
import { makeInitials, prettyPrintClassification } from '../utils/string'
import { IDocument } from '../types/document'

import { AuthContext } from '../components/Providers/AuthProvider' 
import Box, { BoxContent } from '../components/Box'
import DocumentDialog from '../components/Modals/DocumentDialog'
import CredentialList from '../components/CredentialList'
import DocumentList from '../components/DocumentList'
import ClassificationText from '../components/ClassificationText'
 
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

const Home = () => {

    const user: IUser = React.useContext(AuthContext)

    const [documentDialogOpen, setDocumentDialogOpen] = React.useState<boolean>(false)
    const [currentDocument, setCurrentDocument] = React.useState<IDocument>(null)

    React.useEffect(() => {
        return
    }, [])

    const handleSelectDocument = (document: IDocument) => {
        setCurrentDocument(document)
        setDocumentDialogOpen(true)
    }

    return (
        <div className='home'>
            <DocumentDialog
                onClose={() => setDocumentDialogOpen(false)}
                document={currentDocument}
                open={documentDialogOpen}
            />
            <div>
                <Box className=''>
                    <Avatar>{makeInitials(user)}</Avatar>
                    <Typography color='inherit' variant='h4'>{user.givenName} {user.familyName}</Typography>
                    <Typography color='inherit' variant='overline'>Authorization</Typography>
                    <Typography color='inherit' variant='h5'>
                        <ClassificationText>{user.authorization}</ClassificationText>
                    </Typography>
                </Box>
                <Box>
                    <Typography color='inherit' variant='h5'>Your Credential</Typography>
                    <BoxContent>
                        <Typography color='inherit' variant='body1'>Your verifiable credential is accessed here.</Typography>
                        <CredentialList credentials={exampleData} />
                    </BoxContent>
                </Box>
            </div>
            <div>
                <Box>
                    <Typography variant='h5'>Documents</Typography>
                    <BoxContent>
                        <DocumentList onSelect={handleSelectDocument} documents={SAMPLE_DOCUMENTS} />
                    </BoxContent>
                </Box>
            </div>
        </div>
    )
}

export default Home

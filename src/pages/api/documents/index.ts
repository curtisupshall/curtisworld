import { NextApiRequest, NextApiResponse } from 'next'
import { Classification } from '../../../types/classification'
import { IDocument } from '../../../types/document'
import { IUser } from '../../../types/user'

const CLASSIFICATION_ORDER: Classification[] = [
    'OPEN', 'PUBLIC', 'RESTRICTED', 'CONFIDENTIAL', 'CRITICAL'
]

const filterDocuments = (documents: IDocument[], user: IUser): IDocument[] => {
    const { authorization } = user
    return documents.filter((document: IDocument) => {
        return CLASSIFICATION_ORDER.indexOf(document.classification) <= CLASSIFICATION_ORDER.indexOf(authorization)
    })
}

export const SAMPLE_DOCUMENTS: IDocument[] = [
    {
        name: 'Doc1',
        classification: 'OPEN',
        contents: '2+2=4'
    },
    {
        name: 'Doc2',
        classification: 'PUBLIC',
        contents: '3+3=6'
    },
    {
        name: 'Doc3',
        classification: 'RESTRICTED',
        contents: '2*4=8'
    },
    {
        name: 'Doc4',
        classification: 'CONFIDENTIAL',
        contents: '12/4=3'
    },
    {
        name: 'Doc5',
        classification: 'CRITICAL',
        contents: '4^2=16'
    }
]

const getDocuments = (request: NextApiRequest, response: NextApiResponse) => {
    return response.status(200).json(documents)
}

export default getDocuments
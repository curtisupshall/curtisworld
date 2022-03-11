import { NextApiRequest, NextApiResponse } from 'next'
import { ISecureNote } from '../../../types/secureNote'

const secureNote = (request: NextApiRequest, response: NextApiResponse) => {
    if (false) {
        // Authenticate
        return response.status(401).json({ message: 'Not authenticated.' })
    }

    const { secureNoteId } = request.query
    if (request.method === 'POST') {
        // Create new note
        const timestamp: string = (new Date()).toDateString()
        const note: ISecureNote = {
            id: '0',
            name: 'Test note',
            creator: 'Curtis',
            createdAt: timestamp,
            modifiedAt: timestamp,
            type: 'secure-note',
            data: 'This is a test.'
        }
        response.status(200).json(note)
    }

    // Find secure note by Id
    response.status(200).json([])
}

export default secureNote

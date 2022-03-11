import { NextApiRequest, NextApiResponse } from 'next'

const getNotes = (request: NextApiRequest, response: NextApiResponse) => {
    response.status(200).json([])
}

export default getNotes

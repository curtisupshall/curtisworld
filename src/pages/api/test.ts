import { NextApiRequest, NextApiResponse } from 'next'

const getTest = (request: NextApiRequest, response: NextApiResponse) => {
    response.status(200).json({ token: Buffer.from('Test').toString('base64') })
}

export default getTest

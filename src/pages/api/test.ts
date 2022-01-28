import { NextApiRequest, NextApiResponse } from 'next'

const getTest = (request: NextApiRequest, response: NextApiResponse) => {
    response.status(200).json({ token: btoa('Test') })
}

export default getTest

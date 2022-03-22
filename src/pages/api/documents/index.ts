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
        name: 'First Document',
        classification: 'OPEN',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi eros, elementum eu pellentesque ac, finibus vitae orci. Duis nec tempor erat, nec fermentum libero. Vivamus ac ex velit. Sed vitae vehicula nisi. Curabitur dignissim ullamcorper sem, ac bibendum mi semper id. Sed neque purus, interdum commodo convallis a, suscipit non nisi. Etiam imperdiet libero ac nulla tempus vehicula. Nulla feugiat vel arcu quis faucibus.'
    },
    {
        name: 'Second Document',
        classification: 'PUBLIC',
        contents: 'Vestibulum non dignissim massa. Mauris vulputate ultricies justo vel dictum. Maecenas quam nulla, elementum non fringilla sit amet, dictum eu lectus. Praesent placerat vulputate turpis, non scelerisque lacus fermentum vel. Nam semper diam sed nulla finibus, non convallis dui aliquet. Aliquam erat volutpat. Nullam tincidunt eu enim finibus convallis. Morbi fermentum interdum aliquam. Suspendisse eget interdum nunc, eget congue ex. Aliquam efficitur, velit sed vehicula tincidunt, orci urna dignissim ante, a consequat tellus ex eu ex. Pellentesque id lacinia mauris, quis porttitor velit. Nullam efficitur purus vel maximus placerat. Praesent sed fermentum neque.'
    },
    {
        name: 'Third Document',
        classification: 'RESTRICTED',
        contents: 'In hac habitasse platea dictumst. Curabitur rutrum mi velit, a egestas mi tempor quis. Proin maximus tortor et nisl convallis interdum. Aliquam eget ligula quam. Vestibulum porttitor vestibulum posuere. Nulla non mi at magna eleifend aliquam pellentesque vitae diam. Etiam id laoreet libero, non tristique odio. Pellentesque blandit elit nec elit luctus, vitae dignissim neque aliquet. Suspendisse neque quam, faucibus sit amet arcu vitae, tempor faucibus ex. Integer id urna aliquet, maximus risus nec, molestie mauris. Aenean magna elit, tempus commodo turpis id, congue imperdiet mauris. Donec rhoncus lorem id leo rutrum, quis convallis tellus eleifend. Suspendisse suscipit leo id sem vehicula cursus. Suspendisse eget lacinia ipsum.'
    },
    {
        name: 'Fourth Documemt',
        classification: 'CONFIDENTIAL',
        contents: 'Nam vitae volutpat felis, ut sagittis libero. Vestibulum id molestie odio. Nullam convallis felis sit amet ante venenatis dapibus. Fusce augue odio, vehicula nec ullamcorper at, aliquam at nulla. Nullam condimentum, tellus quis cursus cursus, lectus ipsum dictum dolor, vitae posuere neque metus sit amet elit. Duis semper lobortis nunc, sit amet luctus sapien porta ut. Mauris et aliquet ante, nec porta tellus.'
    },
    {
        name: 'Fifth Document',
        classification: 'CRITICAL',
        contents: 'Pellentesque rhoncus eros eget eros dapibus accumsan. Mauris et ornare lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi malesuada commodo nulla eu consectetur. Vestibulum tempor est non leo dignissim, eu eleifend lacus blandit. Fusce rutrum venenatis rutrum. Vivamus non dui quis purus semper vestibulum. In hac habitasse platea dictumst. Donec a molestie risus, id auctor erat. Praesent bibendum et elit vel elementum. Aliquam commodo orci id orci rutrum, vel malesuada lectus cursus. Cras tellus sapien, tincidunt non mollis ut, faucibus nec mauris. Integer sit amet faucibus ligula, quis convallis magna. Curabitur ut dui eu nibh congue mollis.'
    }
]

const getDocuments = (request: NextApiRequest, response: NextApiResponse) => {
    return response.status(200).json(SAMPLE_DOCUMENTS)
}

export default getDocuments
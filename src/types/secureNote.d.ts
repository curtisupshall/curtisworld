export interface INote {
    id: string
    name: string
    type: 'note'
}

export interface ISecureNote extends INote {   
    creator: string
    createdAt: string
    modifiedAt: string
    data: string
    type: 'secure-note'
}

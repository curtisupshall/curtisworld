import { Classification } from "./classification"

export interface IDocument {
    name: string
    classification: Classification
    contents: string
}

export interface ITruncatedData {
    visible: Record<string, string>
    hidden: Record<string, string>
}

const truncateFields = (data: Record<string, string>, length: number = 5): ITruncatedData => {
    if (Object.keys(data).length <= length) {
        return { visible: data, hidden: null }
    }

    let dataKeys: string[] = Object.keys(data)

    const reduceData = (group: string[]) => group.reduce((acc: Record<string, string>, key: string) => (
        { ...acc, [key]: data[key]}
    ), {})

    return { visible: reduceData(dataKeys), hidden: reduceData(dataKeys.splice(length)) }
}

export default truncateFields

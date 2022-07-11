export interface ITruncatedData {
    visible: Record<string, string>
    hidden: Record<string, string>
}

const truncateFields = (data: Record<string, string>, length: number = 3): ITruncatedData => {
    if (Object.keys(data).length <= length) {
        return { visible: data, hidden: null }
    }

    let dataKeys: string[] = Object.keys(data)

    const reduceData = (group: string[]) => group.reduce((acc: Record<string, string>, key: string) => (
        { ...acc, [key]: data[key]}
    ), {})

    const hidden: Record<string, string> = reduceData(dataKeys.splice(length))
    return { visible: reduceData(dataKeys), hidden  }
}

export default truncateFields

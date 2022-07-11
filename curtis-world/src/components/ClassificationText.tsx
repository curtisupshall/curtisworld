import React from 'react'
import classNames from 'classnames'

import { Classification } from '../types/classification'
import { makeClassificationClassName, prettyPrintClassification } from '../utils/string'

interface IClassificationProps extends React.HTMLProps<HTMLSpanElement> {
    children: Classification
}

const ClassificationText = (props: IClassificationProps) => {
    const { children, className, ...rest } = props

    return (
        <span
            className={classNames('classification', makeClassificationClassName(children), className)}
            {...rest}
        >
            {prettyPrintClassification(children)}
        </span>
    )
}

export default ClassificationText

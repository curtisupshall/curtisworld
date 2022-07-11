import React from 'react'
import classNames from 'classnames'

import {
    Divider,
    Paper
} from '@mui/material'

interface IBoxProps extends React.HTMLProps<HTMLDivElement> {
    button?: any
}

const Box = (props: IBoxProps) => {
    const { button, className, children, ...rest } = props

    return (
        <Paper color='inherit' className={classNames('box', {'--button': Boolean(button)}, className)}>
            <div {...rest}>
                {children}
                {button}
            </div>
        </Paper>
    )
}

export const BoxContent = (props: React.HTMLProps<HTMLDivElement>) => {
    const { className, children, ...rest } = props
    return (
        <>
            <Divider className='box__divider' />
            <div className={classNames('box__content', className)} {...rest}>
                {children}
            </div>
        </>
    )
}

export default Box

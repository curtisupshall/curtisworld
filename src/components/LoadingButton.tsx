import React from 'react'
import classnames from 'classnames'

import Button, { ButtonProps } from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'


interface ILoadingButtonProps extends ButtonProps {
    loading: boolean
}

const LoadingButton = (props: ILoadingButtonProps) => {
    const { className, disabled, children, loading, ...rest } = props

    return (
        <Button {...rest} className={classnames(className, 'loading-button')} disabled={disabled || loading}>
            <div className='loading-button__container'>
                {loading && (
                    <CircularProgress
                        className='loading-button__spinner'
                        color='inherit'
                        size={24}
                    />
                )}
                {children}
            </div>
        </Button>
    )
}

export default LoadingButton

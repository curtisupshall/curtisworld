import { CircularProgress } from '@mui/material'
import React from 'react'
import ReactQRCode from 'react-qr-code'

interface IQRCodeProps {
    loading?: boolean
    qrcode?: string
}

const sanitizeQRCode = (code: string): string => {
    return code.substring(0, 256)
}

const QRCode = (props: IQRCodeProps) => {
    const { loading, qrcode } = props
    const empty: Boolean = !qrcode

    return (
        <div className='qr-code'>
            {loading && (
                <CircularProgress className='qr-code__spinner' />
            )}
            {empty ? (
                <img className='qr-code__placeholder' src='/images/qr_placeholder.png' />
            ) : (
                <ReactQRCode
                    size={128}
                    value={qrcode}
                    className='qr-code__svg'
                    fgColor='green'
                />
            )}
        </div>
    )
}

export default QRCode

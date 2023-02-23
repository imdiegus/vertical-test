import React from 'react'
import { ClipLoader } from 'react-spinners'

type Props = {}

export default function LoadingScreen({ }: Props) {
    return (
        <div className='w-scheen h-screen flex items-center justify-center bg-red'>
            <ClipLoader
                color={'#e54266'}
                loading={true}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}
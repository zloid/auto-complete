import React from 'react'
import spinner from './spinner.gif'

export const Spinner = () => (
    <span>
        <img
            // src={'https://media.giphy.com/media/sSgvbe1m3n93G/source.gif'}
            src={spinner}
            alt="Loading..."
            style={{
                width: '30px',
                heigth: '30px',
                position: 'absolute',
                padding: '0 10px',
            }}
        />
    </span>
)

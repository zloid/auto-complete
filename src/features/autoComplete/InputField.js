import React, { useState } from 'react'

export const InputField = () => {
    const [text, setText] = useState('some input field')
    return (
        <div>
            <input value={text} />
        </div>
    )
}

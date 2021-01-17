import React, { useState } from 'react'
import axios from 'axios'

export const InputField = () => {
    const [inputText, setInputText] = useState('')
    /* const [arrayOfNames, setArrayOfNames] = useState([
        'Leanne Graham',
        'Ervin Howell',
        'Clementine Bauch',
        'Patricia Lebsack',
        'Chelsey Dietrich',
        'Mrs. Dennis Schulist',
        'Kurtis Weissnat',
        'Nicholas Runolfsdottir V',
        'Glenna Reichert',
        'Clementina DuBuque',
        'Edfslkj',
        'Erlkjfd',
        'eee',
        'Lsdaf',
        'lell',
    ]) */
    const [arrApiNames, setArrApiNames] = useState(['testName'])

    const getUserNamesFromApi = async () => {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
        )
        const arrayOfApiNames = response.data.map(({ name }) => name)
        console.log(arrayOfApiNames)

        setArrApiNames(arrayOfApiNames)
    }
    const changeInputValue = (e) => {
        getUserNamesFromApi()
        setInputText(e.target.value)
    }

    return (
        <div>
            <input value={inputText} onChange={changeInputValue} />
            <p>inputText: {inputText}</p>
            <p>inputText.length: {inputText.length}</p>
            {/* <p>
                arrayOfNames:{' '}
                {arrayOfNames
                    .filter(
                        (name) =>
                            name.slice(0, inputText.length).toLowerCase() ===
                            inputText.toLowerCase()
                    )
                    .join(', ')}
            </p> */}
            <hr />
            <p>
                <u>arrApiNames:</u>{' '}
                {inputText.length > 0 &&
                    arrApiNames
                        .filter(
                            (name) =>
                                name
                                    .slice(0, inputText.length)
                                    .toLowerCase() === inputText.toLowerCase()
                        )
                        .join(', ')}
            </p>
        </div>
    )
}

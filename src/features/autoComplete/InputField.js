import React, { useState } from 'react'
import axios from 'axios'

export const InputField = () => {
    const [inputText, setInputText] = useState('')
    const [testData, setTestData] = useState('nothing')

    const getUserNamesFromApi = async () => {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
        )
        const someArray = response.data.map(({ name }) => name)
        console.log(someArray)

        // setTestData(someArray[Math.floor(Math.random() * someArray.length)])

        // const someName = someArray[Math.floor(Math.random() * someArray.length)]
        // const someNameFirstChar = someName[0]
        /* 
        if (someNameFirstChar === inputText[0]) {
            setTestData(someName)
        } else {
            setTestData('nothing')
        }
 */

        for (let i = 0; i < someArray.length; i++) {
            if (
                someArray[i].substr(0, inputText.length).toLowerCase() ===
                inputText.toLowerCase()
            ) {
                setTestData(someArray[i])
            } else {
                setTestData('nothing')
            }
        }
    }
    /* 
    useEffect(() => {
        getUserNamesFromApi()
    }) */

    const changeInputValue = (e) => {
        setInputText(e.target.value)
        getUserNamesFromApi()
    }

    return (
        <div>
            <input value={inputText} onChange={changeInputValue} />
            <p>{testData}</p>
            <p>{inputText}</p>
        </div>
    )
}

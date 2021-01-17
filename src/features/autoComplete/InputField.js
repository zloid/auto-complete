import React, { useState } from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'

import store from '../../app/store'
import { fetchUsers } from './autoCompleteSlice'

const InputField = ({ allNamesFromApi, fetchUsers }) => {
    const [inputText, setInputText] = useState('')
    // const [arrayOfApiNames, setArrayOfApiNames] = useState('')

    // const getUserNamesFromApi = async () => {
    // const response = await axios.get(
    // 'https://jsonplaceholder.typicode.com/users'
    // )
    // const arrayOfApiNames = response.data.map(({ name }) => name)
    // console.log(arrayOfApiNames)
    // setArrayOfApiNames(arrayOfApiNames)
    // }

    const changeInputValue = (e) => {
        // getUserNamesFromApi()
        setInputText(e.target.value)
        // store.dispatch(fetchUsers())
        fetchUsers()
        // setArrayOfApiNames(allNamesFromApi)
    }

    return (
        <div>
            <input type="text" value={inputText} onChange={changeInputValue} />
            <p>inputText: {inputText}</p>
            <p>inputText.length: {inputText.length}</p>

            <hr />
            {/* <p>123123: {inputText.length > 0 && arrayOfApiNames}</p> */}
            {/* <p>
                <u>arrayOfApiNames:</u>{' '}
                {inputText.length > 0 &&
                    arrayOfApiNames
                        .filter(
                            (name) =>
                                name
                                    .slice(0, inputText.length)
                                    .toLowerCase() === inputText.toLowerCase()
                        )
                        .join(', ')}
            </p> */}
            <hr />
            <u>{inputText.length > 0 && allNamesFromApi}</u>
        </div>
    )
}

const mapStateToProps = (state) => ({
    allNamesFromApi: state.autoCompleteReducer.allNamesFromApi,
})

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(InputField)

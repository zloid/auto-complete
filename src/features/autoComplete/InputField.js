import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchUsers, getCurrentStringFromInput } from './autoCompleteSlice'

const InputField = ({
    selectedNamesFromApi,
    fetchUsers,
    getCurrentStringFromInput,
}) => {
    const [inputText, setInputText] = useState('')

    const changeInputValue = (e) => {
        setInputText(e.target.value)
        getCurrentStringFromInput(e.target.value)
        fetchUsers()
    }

    return (
        <div>
            <input type="text" value={inputText} onChange={changeInputValue} />

            <ul>
                {selectedNamesFromApi.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            <hr />
            <p>inputText: {inputText}</p>
            <p>inputText.length: {inputText.length}</p>
            <hr />
        </div>
    )
}

const mapStateToProps = (state) => ({
    selectedNamesFromApi: state.autoCompleteReducer.selectedNamesFromApi,
})

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    getCurrentStringFromInput: (StringFromInput) =>
        dispatch(getCurrentStringFromInput(StringFromInput)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InputField)

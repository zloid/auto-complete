import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchUsers, getCurrentStringFromInput } from './autoCompleteSlice'
// import NamesFromApi from './NamesFromApi/NamesFromApi'

const InputField = ({
    selectedNamesFromApi,
    fetchUsers,
    getCurrentStringFromInput,
    userNameFromSuccessList,
}) => {
    const [inputText, setInputText] = useState('')

    const changeInputValue = (e) => {
        setInputText(e.target.value)
        getCurrentStringFromInput(e.target.value)
        fetchUsers()
    }

    const NamesFromApi = ({ selectedNamesFromApi }) => {
        return (
            <ul>
                {selectedNamesFromApi.length > 0
                    ? selectedNamesFromApi.map((name, i) => (
                          <li key={name + i} onClick={() => setInputText(name)}>
                              {name}
                          </li>
                      ))
                    : 'Nothing found...'}
            </ul>
        )
    }

    return (
        <div>
            {userNameFromSuccessList}
            <input type="text" value={inputText} onChange={changeInputValue} />
            <NamesFromApi selectedNamesFromApi={selectedNamesFromApi} />

            <hr />
            <p>inputText: {inputText}</p>
            <p>inputText.length: {inputText.length}</p>
            <hr />
        </div>
    )
}

const mapStateToProps = (state) => ({
    selectedNamesFromApi: state.autoCompleteReducer.selectedNamesFromApi,
    userNameFromSuccessList: state.autoCompleteReducer.userNameFromSuccessList,
})

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    getCurrentStringFromInput: (StringFromInput) =>
        dispatch(getCurrentStringFromInput(StringFromInput)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InputField)

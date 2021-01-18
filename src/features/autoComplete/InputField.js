import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
    fetchUsers,
    getCurrentStringFromInput,
    deleteDataFromApi,
} from './autoCompleteSlice'

const InputField = ({
    selectedNamesFromApi,
    fetchUsers,
    getCurrentStringFromInput,
    deleteDataFromApi,
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
                          <li
                              key={name + i}
                              onClick={() => {
                                  setInputText(name)
                                  deleteDataFromApi()
                              }}
                          >
                              {name}
                          </li>
                      ))
                    : 'Try write: Clementin, then click on name'}
            </ul>
        )
    }

    return (
        <div>
            <input type="text" value={inputText} onChange={changeInputValue} />

            <NamesFromApi selectedNamesFromApi={selectedNamesFromApi} />
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
    deleteDataFromApi: () => dispatch(deleteDataFromApi()),
})

export default connect(mapStateToProps, mapDispatchToProps)(InputField)

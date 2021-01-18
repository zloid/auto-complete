import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Spinner } from '../../components/Spinner'
import {
    fetchUsers,
    getCurrentStringFromInput,
    deleteDataFromApi,
} from './autoCompleteSlice'

const InputField = ({
    selectedNamesFromApi,
    isFetching,
    fetchUsers,
    getCurrentStringFromInput,
    deleteDataFromApi,
}) => {
    const [inputText, setInputText] = useState('')

    const changeInputValue = (e) => {
        fetchUsers()
        setInputText(e.target.value)
        getCurrentStringFromInput(e.target.value)
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
            <input
                type="text"
                value={inputText}
                onChange={changeInputValue}
                placeholder="Name"
            />
            {isFetching && <Spinner />}
            <NamesFromApi selectedNamesFromApi={selectedNamesFromApi} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    selectedNamesFromApi: state.autoCompleteReducer.selectedNamesFromApi,
    isFetching: state.autoCompleteReducer.isFetching,
})

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    getCurrentStringFromInput: (StringFromInput) =>
        dispatch(getCurrentStringFromInput(StringFromInput)),
    deleteDataFromApi: () => dispatch(deleteDataFromApi()),
})

export default connect(mapStateToProps, mapDispatchToProps)(InputField)

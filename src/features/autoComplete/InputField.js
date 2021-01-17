import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchUsers, getCurrentLengthOfString } from './autoCompleteSlice'

const InputField = ({ allNamesFromApi, fetchUsers, getCurrentLengthOfString }) => {
    const [inputText, setInputText] = useState('')

    const changeInputValue = (e) => {
        setInputText(e.target.value)
        getCurrentLengthOfString(e.target.value)
        fetchUsers()
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
            {/* <u>{inputText.length > 0 && allNamesFromApi}</u> */}
            <u>{inputText.length > 0 &&  allNamesFromApi}</u>
        </div>
    )
}

const mapStateToProps = (state) => ({
    allNamesFromApi: state.autoCompleteReducer.allNamesFromApi,
})

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    getCurrentLengthOfString: (length) => dispatch(getCurrentLengthOfString(length))
})

export default connect(mapStateToProps, mapDispatchToProps)(InputField)

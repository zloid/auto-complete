import React from 'react'
import { connect } from 'react-redux'
import { getUserNameFromSuccessList } from '../autoCompleteSlice'
/**
 * Component for present names from API
 *
 * @param {string[]} props.selectedNamesFromApi
 * @returns {JSX.Element}
 */
const NamesFromApi = ({ selectedNamesFromApi, getUser }) => {
    return (
        <ul>
            {selectedNamesFromApi.length > 0
                ? selectedNamesFromApi.map((name, i) => (
                      <li key={name + i} onClick={() => getUser(name)}>
                          {name}
                      </li>
                  ))
                : 'Nothing found...'}
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => ({
    getUser: (user) => dispatch(getUserNameFromSuccessList(user)),
})
export default connect(null, mapDispatchToProps)(NamesFromApi)

import axios from 'axios'

const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS'
const GET_LENGTH_STRING_FROM_INPUT = 'GET_LENGTH_STRING_FROM_INPUT'

// const GET_CURRENT_USER_FAILURE = 'GET_CURRENT_USER_FAILURE'

export function getCurrentLengthOfString(lengthOfString) {
    return {
        type: GET_LENGTH_STRING_FROM_INPUT,
        payload: lengthOfString,
    }
}

export function fetchUsers() {
    return (dispatch) => {
        return axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                dispatch({
                    type: GET_CURRENT_USER_SUCCESS,
                    allNamesFromApi: response.data.map(({ name }) => name),
                })
            })
    }
}

export default function autoCompleteReducer(state = {}, action) {
    switch (action.type) {
        case GET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                allNamesFromApi: state.lengthOfInputString.length > 0 && action.allNamesFromApi
                    .filter(
                        (name) =>
                            name
                                .slice(0, state.lengthOfInputString.length)
                                .toLowerCase() ===
                            state.lengthOfInputString.toLowerCase()
                    )
                    .join(', '),
            }
        case GET_LENGTH_STRING_FROM_INPUT:
            return { ...state, lengthOfInputString: action.payload }
        default:
            return state
    }
}

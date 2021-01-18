import axios from 'axios'
import { selectNamesEqualToInputString } from './selectNamesEqualToInputString'

// pieces below bundled together according to "Redux Ducks" pattern
// https://github.com/erikras/ducks-modular-redux

const GET_STRING_FROM_AUTOCOMPLETE_INPUT =
    'autoComplete/GET_STRING_FROM_AUTOCOMPLETE_INPUT'
const GET_CURRENT_USER_SUCCESS = 'autoComplete/GET_CURRENT_USER_SUCCESS'
const DELETE_DATA_FROM_API = 'autoComplete/DELETE_DATA_FROM_API'

// const GET_CURRENT_USER_FAILURE = 'GET_CURRENT_USER_FAILURE'

export function getCurrentStringFromInput(StringFromInput) {
    return {
        type: GET_STRING_FROM_AUTOCOMPLETE_INPUT,
        payload: StringFromInput,
    }
}

export function fetchUsers() {
    return (dispatch) => {
        return axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                dispatch({
                    type: GET_CURRENT_USER_SUCCESS,
                    payload: response.data.map(({ name }) => name),
                })
            })
    }
}

export function deleteDataFromApi() {
    return { type: DELETE_DATA_FROM_API }
}

const initialState = {
    selectedNamesFromApi: [],
    stringFromInput: '',
}

export default function autoCompleteReducer(state = initialState, action) {
    switch (action.type) {
        case GET_STRING_FROM_AUTOCOMPLETE_INPUT:
            return { ...state, stringFromInput: action.payload }
        case GET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                selectedNamesFromApi: selectNamesEqualToInputString(
                    state.stringFromInput,
                    action.payload
                ),
            }
        case DELETE_DATA_FROM_API:
            return { ...state, selectedNamesFromApi: [] }

        default:
            return state
    }
}

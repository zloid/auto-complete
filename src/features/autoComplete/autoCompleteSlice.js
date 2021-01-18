import axios from 'axios'
import { selectNamesEqualToInputString } from './selectNamesEqualToInputString'

const GET_STRING_FROM_AUTOCOMPLETE_INPUT =
    'autoComplete/GET_STRING_FROM_AUTOCOMPLETE_INPUT'
const GET_CURRENT_USER_SUCCESS = 'autoComplete/GET_CURRENT_USER_SUCCESS'
const GET_USER_NAME_FROM_SUCCESS_LIST =
    'autoComplete/GET_USER_NAME_FROM_SUCCESS_LIST'

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

export function getUserNameFromSuccessList(name) {
    return {
        type: GET_USER_NAME_FROM_SUCCESS_LIST,
        payload: name,
    }
}

const initialState = {
    selectedNamesFromApi: [],
    stringFromInput: '',
    userNameFromSuccessList: '',
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
        case GET_USER_NAME_FROM_SUCCESS_LIST:
            return {
                ...state, 
                userNameFromSuccessList: action.payload               
            }
        default:
            return state
    }
}

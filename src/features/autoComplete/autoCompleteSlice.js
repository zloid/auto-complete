import axios from 'axios'

const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS'

// const GET_CURRENT_USER_FAILURE = 'GET_CURRENT_USER_FAILURE'

/* export function fetchArticleDetails() {
  return function(dispatch) {
    return axios.get("https://api.myjson.com/bins/19dtxc")
      .then(({ data }) => {
      dispatch(setArticleDetails(data));
    });
  };
} */

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
            return { ...state, allNamesFromApi: action.allNamesFromApi }
        default:
            return state
    }
}

/*
const GET_CURRENT_USER = 'GET_CURRENT_USER';
const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS';
const GET_CURRENT_USER_FAILURE = 'GET_CURRENT_USER_FAILURE';


const LOAD_USERS_LOADING = 'LOAD_USERS_LOADING'
const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS'
const LOAD_USERS_ERROR = 'LOAD_USERS_ERROR'

const getUser = () => {
  return (dispatch) => {
    dispatch({ type: GET_CURRENT_USER });
    return axios.get('/api/auth/user').then(  
      user => dispatch({ type: GET_CURRENT_USER_SUCCESS, user }),
      err => dispatch({ type: GET_CURRENT_USER_FAILURE, err })
    );
  };
}; */

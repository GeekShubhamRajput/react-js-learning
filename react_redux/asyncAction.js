const redux = require('redux')
const createStore = redux.createStore

const initialState = {
  loading: false,
  users: [],
  error: ''
}

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_ERROR = 'FETCH_USER_ERROR'

const fetchUsersRequest = () => {
  return {
    loading: FETCH_USER_REQUEST
  }
}

const fetchUsersSuccess = (users) => {
  return {
    loading: FETCH_USER_SUCCESS,
    payload: users
  }
}

const fetchUsersFailure = (errors) => {
  return {
    loading: FETCH_USER_ERROR,
    payload: errors
  }
}

const reducer = (state=initialState, action) => {
  switch(action.type){
    case FETCH_USER_REQUEST:
      return{
        ...state,
        loading: true    
      }
    case FETCH_USER_SUCCESS:
      return{
        loading: false,
        users: action.payload,
        error: ''
      }
    case FETCH_USER_ERROR:
      return{
        loading: false,
        users: [],
        error: action.payload
      }
  }
}

const store = createStore(reducer)

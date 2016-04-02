/**
App state tree:
{
  loadingData: true/false,
  data: {},
  error: {}
}
 */

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

function loadingData(state = false, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return true
    case 'SET_DATA':
      return false
    case 'APOLOGIZE':
      return false
    default:
      return state
  }
}

function data(state = {}, action) {
  switch (action.type) {
    case 'SET_DATA':
      return action.data
    default:
      return state
  }
}

function error(state = null, action) {
  switch (action.type) {
    case 'APOLOGIZE':
      return action.error
    default:
      return state
  }
}

const app = combineReducers({
  loadingData,
  data,
  error,
  routing: routerReducer
})

export default app

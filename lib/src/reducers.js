/**
App state tree:
{
  loadingData: true/false,
  data: {},
  jvData: [],
  error: {},
  visibleLineCharts: [{
    type: string,
    name: string
  }]
}
 */

import { DEFAULT_CHARTS } from './components/Charts/config'

export function loadingData(state = false, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return true
    case 'SET_DATA':
      return false
    case 'SET_JV_DATA':
      return false
    case 'APOLOGIZE':
      return false
    default:
      return state
  }
}

export function data(state = {}, action) {
  switch (action.type) {
    case 'SET_DATA':
      return action.data
    default:
      return state
  }
}

export function jvData(state = [], action) {
  switch (action.type) {
    case 'SET_JV_DATA':
      return action.data
    default:
      return state
  }
}

export function error(state = null, action) {
  switch (action.type) {
    case 'APOLOGIZE':
      return action.error
    default:
      return state
  }
}

export function visibleLineCharts(state = DEFAULT_CHARTS, action) {
  switch (action.type) {
    case 'SET_VISIBLE_LINE_CHARTS':
      return action.charts
    default:
      return state
  }
}

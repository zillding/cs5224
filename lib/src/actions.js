// TODO: determined based on env
const API_ROOT = 'http://zillding.mybluemix.net/api'

export function fetchData() {
  return dispatch => {
    dispatch({ type: 'FETCH_DATA' })

    return fetch(`${API_ROOT}/data`).then(
      response => response.json()
    ).then(
      data => dispatch(setData(data))
    ).catch(
      err => dispatch(apologize(err))
    )
  }
}

function setData(data) {
  return { type: 'SET_DATA', data }
}

function apologize(error) {
  return { type: 'APOLOGIZE', error }
}

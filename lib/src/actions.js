const API_ROOT = '/api'

export function fetchData() {
  return (dispatch, getState) => {
    // check if data is alr loaded
    const { data } = getState()
    if (data && Object.keys(data).length > 0)
      return

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

export function setVisibleLineCharts(charts) {
  return { type: 'SET_VISIBLE_LINE_CHARTS', charts }
}

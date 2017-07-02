// Action Creators

export const setWindowSize = (windowDimensions) => {
  return {
    type: "SET_WINDOW_SIZE",
    windowDimensions
  }
}

export const getRecords = () => {
  return {
    type: "GET_RECORDS"
  }
}


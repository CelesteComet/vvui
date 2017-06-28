// Reducers

var initialState = {
  _window: {
    width: null,
    height: null
  }
}

const defectReducer = (state = initialState, action) => {
  var copy = Object.assign({}, state);
  switch (action.type) {
    case SET_WINDOW_SIZE:
      copy._window.width = action.width;
      copy._window.height = action.height;
      return copy;
    default:
      return copy; 
  }
}
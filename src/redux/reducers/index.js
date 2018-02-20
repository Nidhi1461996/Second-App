const defaultState = {
  savedNotes: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, savedNotes: [...state.savedNotes, action.payload] };
    default: return state;
  }
};

export default reducer;

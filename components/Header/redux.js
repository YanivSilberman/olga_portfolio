// Constants
export const ACTIVATE_TYPE = 'NAV/TYPES/ACTIVE';

// Initial State
const initialState = {
  activeProjectType: 'ALL'
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATE_TYPE:
      return {
        ...state,
        activeProjectType: action.payload
      };
    default:
      return state;
  }
};

// Action creators
const actionCreators = {};

actionCreators.activateType = payload => ({ type: ACTIVATE_TYPE, payload });

// Discpatchers
const dispatchers = {};

dispatchers.activateType = payload => actionCreators.activateType(payload);

export { actionCreators, reducer, dispatchers };

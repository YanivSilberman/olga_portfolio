import _ from 'underscore';

// Constants
export const UPDATE_CREATE_FIELD = 'CREATE/FIELD/UPDATE';
export const RESET_CREATE = 'CREATE/RESET';
export const UPDATE_ALL = 'CREATE/UPDATE';

// Initial State
const initialState = {
  title: null,
  description: null,
  image: null,
  projectTypes: [],
  galleries: [],
  tags: [],
  tools: []
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ALL:
      return {
        ...action.payload,
        galleries: action.payload.galleries.map(x => ({ image: x.image })),
        projectTypes: _.pluck(action.payload.projectTypes, 'id'),
        tags: _.pluck(action.payload.tags, 'id'),
        tools: _.pluck(action.payload.tools, 'id')
      };
    case UPDATE_CREATE_FIELD:
      return {
        ...state,
        ...action.payload
      };
    case RESET_CREATE:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

// Action creators
const actionCreators = {};

actionCreators.updateField = payload => ({
  type: UPDATE_CREATE_FIELD,
  payload
});
actionCreators.resetCreate = () => ({ type: RESET_CREATE });
actionCreators.updateCreate = payload => ({ type: UPDATE_ALL, payload });

// Discpatchers
const dispatchers = {};

dispatchers.updateField = payload => actionCreators.updateField(payload);
dispatchers.resetCreate = () => actionCreators.resetCreate();
dispatchers.updateCreate = payload => actionCreators.updateCreate(payload);

export { actionCreators, reducer, dispatchers };

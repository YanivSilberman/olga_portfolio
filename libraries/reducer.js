import { combineReducers } from 'redux';
import { reducer as authReducer } from '../components/AuthFields/store';
import { reducer as navReducer } from '../components/Header/redux';
import { reducer as createReducer } from '../components/ProjectForm/redux';

export default function getReducer(client) {
  return combineReducers({
    apollo: client.reducer(),
    auth: authReducer,
    nav: navReducer,
    create: createReducer
  });
}

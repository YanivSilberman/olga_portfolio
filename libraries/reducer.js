import { combineReducers } from 'redux';
import { reducer as authReducer } from '../components/AuthFields/store';
import { reducer as homeReducer } from '../components/Home/redux';

export default function getReducer(client) {
  return combineReducers({
    apollo: client.reducer(),
    auth: authReducer,
    home: homeReducer
  });
}

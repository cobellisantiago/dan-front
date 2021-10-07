import { combineReducers, createStore } from 'redux';
import { constructionsReducer } from './constructions/reducer';
import { clientsReducer } from './clients/reducer';
import { userReducer } from './users/reducer';

const rootReducer = combineReducers({
  clients: clientsReducer,
  constructions: constructionsReducer,
  users: userReducer,
});

const store = createStore(rootReducer);

export default store;

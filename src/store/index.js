import { combineReducers, createStore } from 'redux';
import { constructionsReducer } from './constructions/reducer';
import { clientsReducer } from './clients/reducer';

const rootReducer = combineReducers({
  clients: clientsReducer,
  constructions: constructionsReducer,
});

const store = createStore(rootReducer);

export default store;

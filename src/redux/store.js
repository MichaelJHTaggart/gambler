import { combineReducers, createStore } from 'redux';
import reducer from './reducer';

const rootReducer = combineReducers({
 user: reducer
})

export default createStore(rootReducer)
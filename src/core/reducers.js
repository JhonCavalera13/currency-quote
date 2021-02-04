import { combineReducers } from 'redux';
import { coinTypesReducer } from './coinTypes/reducer';

export default combineReducers({
    coinTypes: coinTypesReducer
});

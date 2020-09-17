import { combineReducers } from 'redux';
import productReducer from './productReducer';
import alertReducer from './alertReducer';

export default combineReducers({
    productss: productReducer, // i brought the state from productReducer here and productss utilice the state
    alertss: alertReducer
})
import {combineReducers} from 'redux';
import {loginReducer} from './loginReducer';
import {productReducer} from './productReducer'


const allReducer = combineReducers({
    loginReducer, productReducer
})

export default allReducer
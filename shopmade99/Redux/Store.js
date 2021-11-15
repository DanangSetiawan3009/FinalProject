import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import allReducer from './Reducers';
const Store = createStore(allReducer, applyMiddleware(Thunk));
export default Store;

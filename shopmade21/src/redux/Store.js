import { combineReducers, createStore } from "redux";
import loginReducer from "./loginReducer"


const allReducer = combineReducers ({
    loginReducer
})

const Store = createStore(
    allReducer
)

export default Store
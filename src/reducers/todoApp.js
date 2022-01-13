import { combineReducers } from "redux";
import todos from "./todos";
const todoApp = combineReducers({todos,});
//应从连接处得知filter
export default todoApp;

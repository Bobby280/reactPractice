import { createStore } from "redux";
import { loadState, saveState } from "./localStorage";
import todoApp from "./reducers/todoApp";

const persistedState = loadState()
let store = createStore(todoApp,persistedState);
console.log(store.getState())
store.subscribe(() => {
  saveState({
    todos:store.getState().todos,
  
  })//?
})
export default store
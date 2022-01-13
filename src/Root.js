import { Provider } from "react-redux";
import App from "./App";
import React from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"


//不显示组件
const Root = ({store}) => {
  return(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route  path="/:filter?"  component={App} />
      </Switch>
    </Router>
  </Provider>
)}

export default Root
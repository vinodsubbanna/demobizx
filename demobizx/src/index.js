import React from 'react';
import ReactDOM from 'react-dom';

import Routes from "./components/Routes"
import { Router } from "react-router-dom"
import { createBrowserHistory as createHistory } from 'history'

const history = createHistory()

ReactDOM.render(
    <Router history={history}>
      <Routes />
    </Router>,
    document.getElementById("root")
  );
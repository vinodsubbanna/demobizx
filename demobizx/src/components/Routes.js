import React from "react"
import { Route, Switch } from "react-router-dom"
import App from "../App";

const Routes = () => {
  return (
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
  )
}

export default Routes

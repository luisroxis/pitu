import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/HomePage'
import Redirect from '../pages/RedirectPage'
import Stats from '../pages/StatsPage'
import NotFound from '../pages/NotFoundPage'

// pitu.xx -> HomePage
// pitu.xx/:code -> RedirectPage
// pitu.xx/:code/stats -> StatsPages

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route  path="/" exact component={Home} />
        <Route  path="/:code" exact component={Redirect} />
        <Route  path="/:code/stats" exact  component={Stats} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
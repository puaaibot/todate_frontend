import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage.js'

import './main.css'


render((
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Router history={ browserHistory }>
      <Route path="/">
        <IndexRoute component={IndexPage} />
        <Route path="login" component={LoginPage} />
      </Route>
    </Router>
  </MuiThemeProvider>
), document.getElementById('app'))

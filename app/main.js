import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import App from './components/App.js'
import './main.css'

const ACITVE = { color: 'red' }


class MyRouter extends Component {
    render() {
        return (
            <div>
                <h1>我的路由</h1>
                <ul>
                    <li><Link to="/" activeStyle={ACITVE}>首页</Link></li>
                    <li><Link to="/users" activeStyle={ACITVE}>用户页</Link></li>
                    <li><Link to="/app" activeStyle={ACITVE}>其他页</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}


class Index extends React.Component {
    render() {
        return (
            <div>
                <h2>Index!</h2>
            </div>
        )
    }
}


class Users extends React.Component {
    render() {
        return (
            <div>
                <h2>Users...</h2>
            </div>
        )
    }
}


render((
    <Router history={browserHistory}>
        <Route path="/" component={MyRouter}>
            <IndexRoute component={Index} />
            <Route path="users" component={Users} />
            <Route path="app" component={App} />
        </Route>
    </Router>
), document.getElementById('app'))

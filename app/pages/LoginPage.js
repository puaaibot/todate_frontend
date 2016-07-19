import React from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'


const style = {
  margin: 50,
}

export default class LoginPage extends React.Component {
  render() {
    return (
        <div>
          <Link to="/"><RaisedButton primary={true} style={style} label="登录" /></Link>
        </div>
    )
  }
}

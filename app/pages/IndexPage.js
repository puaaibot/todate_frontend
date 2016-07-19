import React from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'


const style = {
  margin: 500,
}

export default class IndexPage extends React.Component {
  render() {
    return (
        <div>
          <Link to="/login"><RaisedButton primary={true} style={style} label="登录" /></Link>
        </div>
    )
  }
}

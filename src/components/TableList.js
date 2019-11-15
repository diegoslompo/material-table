import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableList extends Component {

  render () {

    const {users} = this.props

    return (
      <ul className="App">
        {users && (
          users.map( user => (
            <li key={user.id} >{user.name}</li>
          ))
        )}
      </ul>
    );
  }
}

function mapStateToProps ({users}) {
    return {users: users.data}
}
  
export default connect(mapStateToProps)(TableList)


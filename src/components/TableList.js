import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableList extends Component {

  state = { open: false, userId: '' };
 
  toggle = (id) => {
    this.setState(prevState => ({ open: !prevState.open, userId: id }));
  };
  openModal = (id) => { this.setState(() => ({ userId: id}))}

  render () {

    const {users, todos} = this.props
    const { userId } = this.state

    return (
      <List>
        <ul className="App">
          {users && (
            users.map( user => (
              <li key={user.id}>
                <span>{user.name}</span>
                <button onClick={() => this.toggle(user.id)}>Open</button>
              </li>
            ))
          )}
        </ul>
        <Todos open={this.state.open}>
          {todos && (
              todos.map( todos => (todos.userId === userId) && (
                <div key={todos.id}>
                  <span>ID TASK: {todos.id}</span>
                  <span>TITLE: {todos.title}</span>
                  <span completed={todos.completed && 'true'}>{todos.completed ? 'completed': 'backlog'}</span>
                </div>
              ))
            )}
        </Todos>
      </List>
    );
  }
}

function mapStateToProps ({users, todos}) {
    return {users: users.data, todos: todos.data }
}



  
export default connect(mapStateToProps)(TableList)


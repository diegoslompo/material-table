import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled, { css }from 'styled-components'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import AddIcon from '@material-ui/icons/Add'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'

class TableList extends Component {

  state = { open: false, userId: '' }
 
  toggle = (id) => {
    this.setState(prevState => ({ open: true, userId: id }))
  }

  openModal = (id) => { this.setState(() => ({ userId: id}))}

  render () {

    const {users, todos} = this.props
    const { userId, open} = this.state

    return (
      <ListTab>
        <Users open={!open}>
          {users && (
            users.map( user => (
              <UsersList key={user.id}>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <AccountCircleIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={user.name}
                    />
                    <ListItemSecondaryAction onClick={() => this.toggle(user.id)}>
                      <IconButton edge="end" aria-label="delete">
                        <AddIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              </UsersList>
            ))
          )}
        </Users>
        <Todos open={open}>
            <Paper >
              <Table aria-label="simple table">
                <TableBody>
                  {todos && (
                    todos.map( todos => (todos.userId === userId) && (
                      <TableRow key={todos.id}>
                        <TableCell align="right">{todos.title}</TableCell>
                        <TableCell align="right">
                          <Chip color={todos.completed ? 'primary': 'secondary'} size="small" label={todos.completed ? 'completed': 'in backlog'}/>
                          </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </Paper>
        </Todos>
      </ListTab>
    );
  }
}

function mapStateToProps ({users, todos}) {
    return {users: users.data, todos: todos.data }
}


const ListTab = styled.div`
  display: flex;
  border: 1px solid #ccc;
  margin: 40px;
  font-family: sans-serif;
`;
const Users = styled.div`
  width: 40%;
  transition: 0.5s;

  ${props => props.open && css`
    width: 100%;
  `}
`;
const UsersList = styled.li`
  list-style: none;

  &:nth-child(even) {
    background: #fffcf9;
  }
`;
const Todos = styled.div`
  width: 0%;
  transition: 0.3s;

  ${props => props.open && css`
    width: 60%;
  `}
`;


  
export default connect(mapStateToProps)(TableList)


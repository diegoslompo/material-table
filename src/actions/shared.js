import { getAll } from '../utils/api'
import {receiveUsers} from '../actions/users'
import {receiveTodos} from '../actions/todos'

export function handleInitialData () {
  return(dispatch) => {
    return getAll()
      .then(({users, todos}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveTodos(todos))
      })
  }
}

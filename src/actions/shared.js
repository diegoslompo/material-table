import { getAll } from '../utils/api'
import {receivePosts} from '../actions/users'

export function handleInitialData () {
  return(dispatch) => {
    return getAll()
      .then(({users}) => {
        dispatch(receivePosts(users))
      })
  }
}

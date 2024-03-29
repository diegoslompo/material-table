import {RECEIVE_TODOS} from '../actions/todos'

export default function todos (state={}, action) {
  switch (action.type) {
    case RECEIVE_TODOS:
      return {
        ...state,
        data: action.todos
      }

    default:
      return state 
  }
}
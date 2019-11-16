export const RECEIVE_TODOS = 'RECEIVE_TODOS'

export function receiveTodos (todos) {
  return {
    type: RECEIVE_TODOS,
    todos: todos,
  }
}

const api = "https://jsonplaceholder.typicode.com"
    
export function getAll () {
  return Promise.all([
    getAllUsers(),
    getAllTodos()
  ]).then(([users, todos]) => ({
    users,
    todos
  }))
}

export const getAllUsers = () =>
  fetch(`${api}/users`)
    .then(res => res.json())
    .then(data => data)

export const getAllTodos = () =>
  fetch(`${api}/todos`)
    .then(res => res.json())
    .then(data => data)
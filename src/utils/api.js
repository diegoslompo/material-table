const api = "https://jsonplaceholder.typicode.com/users"
    
export function getAll () {
  return Promise.all([
    getAllUsers()
  ]).then(([users]) => ({
    users
  }))
}

export const getAllUsers = () =>
  fetch(`${api}`)
    .then(res => res.json())
    .then(data => data)
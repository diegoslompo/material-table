export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receivePosts (users) {
  return {
    type: RECEIVE_USERS,
    users: users,
  }
}

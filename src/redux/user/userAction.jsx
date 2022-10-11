export const SET_USER = 'SET_USER'

export const setCurrentUser = user =>({
    type: SET_USER,
    payload: user
})
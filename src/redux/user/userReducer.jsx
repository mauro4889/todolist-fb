import { SET_USER } from "./userAction"


const initialState = {
    user: false
}

export const userReducer = (state = initialState, action) =>{
    const {type, payload} = action
    switch(type){
        case SET_USER:
            return {...state, user:payload}
        default:
            return state
    }
}
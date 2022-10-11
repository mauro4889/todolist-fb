import { GET_TASK_FAILED, RECIVE_TASKS, UPDATE_LOCAL_TASKS } from "./taskAction"


const initialState = {
    task: '',
    finish: false
}

export const reducerTask = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case RECIVE_TASKS:
            return {
                state,
                task: payload,
                finish
            }
        case GET_TASK_FAILED:
            return {
                state,
                error: payload
            }
        case UPDATE_LOCAL_TASKS:
            return {
                state,
                task: [state.task, payload]
            }
        default:
            return state
    }
}
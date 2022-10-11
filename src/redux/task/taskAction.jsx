import { async } from "@firebase/util"
import { createTaskDocuments, getFirebaseTasks } from "../../firebase/firebase-utils"


export const RECIVE_TASKS = 'RECIVE_TASKS'
export const GET_TASK_FAILED = 'GET_TASK_FAILED'
export const UPDATE_LOCAL_TASKS = 'UPDATE_LOCAL_TASKS'


export const getTasks = userid =>{
    return async dispatch => {
        try {
            const tasks = await getFirebaseTasks(userid)
            dispatch({
                type: RECIVE_TASKS,
                payload: tasks
            })
        } catch (error) {
            dispatch(failedGetTasks(error.message))
        }
    }
} // SE OBTIENE LAS TAREAS DE FIREBASE

export const failedGetTasks = error => ({
    type: GET_TASK_FAILED,
    payload: error || 'Hubo un error!',
}); // SE PASA EL ERROR

export const createTask = task => {
    return async dispatch => {
        try {
            await createTaskDocuments(task)
            dispatch(getTasks(task.user))
            return true
        } catch (error) {
            dispatch({
                type: GET_TASK_FAILED,
                payload: error,
            })
            return false
        }
    }
}// SE CREA TAREA
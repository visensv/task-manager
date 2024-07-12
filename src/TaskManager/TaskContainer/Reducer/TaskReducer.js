import { CREATE_TASK, DELETE_TASK, UPDATE_TASK, TOGGLE_EDIT_MODAL, TASK_IN_EDIT, SET_TASK_ORDER } from "../../../constants/actionTypes";

const InitialState = {
    tasks: [],
    taskInEdit: {},
    showEditModal: false
};

const TaskReducer = (state, action) => {
    switch (action.type) {
        case CREATE_TASK: {
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            }
        }

        case DELETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        }
            
        case UPDATE_TASK: {
            const updatedTask = action.payload;
            const updatedTasks = state.tasks.map((task) => {
                if (task.id === updatedTask.id) {
                    return updatedTask;
                }
                return task;
            });
            return {
                ...state,
                tasks: updatedTasks,
            };
        }
            
        case TOGGLE_EDIT_MODAL: {
            return {
                ...state,
                showEditModal: action.payload,
            };
        }
        case TASK_IN_EDIT: {
            return {
                ...state,
                taskInEdit: action.payload,
            };
        }
        case SET_TASK_ORDER: { 
            return {
                ...state,
                tasks: action.payload,
            };
        }
        default:
            return state;
    }
}

export { InitialState, TaskReducer };
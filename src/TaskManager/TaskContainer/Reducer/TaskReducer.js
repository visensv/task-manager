
const InitialState = {
    tasks: [],
    taskInEdit: {},
    showEditModal: false
};

const TaskReducer = (state, action) => {
    switch (action.type) {
        case "CREATE_TASK": {
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            }
        }

        case "DELETE_TASK": {
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        }
            
        case "UPDATE_TASK": {
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
            
        case "TOGGLE_EDIT_MODAL": {
            return {
                ...state,
                showEditModal: action.payload,
            };
        }
        case "TASK_IN_EDIT": {
            return {
                ...state,
                taskInEdit: action.payload,
            };
        }
        default:
            return state;
    }
}

export { InitialState, TaskReducer };
import { CREATE_TASK, DELETE_TASK, UPDATE_TASK, TOGGLE_EDIT_MODAL, TASK_IN_EDIT } from "../../../constants/actionTypes";

const createTask = (formObject) => ({
    type: CREATE_TASK,
    payload: {
        id: Date.now(),
        ...formObject,
    },
});

const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: id,
});

const updateTask = (formObject, id) => ({
    type: UPDATE_TASK,
    payload: { ...formObject, id },
});

const toggleEditModal = (isOpen) => ({
    type: TOGGLE_EDIT_MODAL,
    payload: isOpen,
});

const setTaskInEdit = (task) => ({
    type: TASK_IN_EDIT,
    payload: task,
});

export { createTask, deleteTask, updateTask, toggleEditModal, setTaskInEdit }
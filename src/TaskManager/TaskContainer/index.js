import React, { useReducer } from 'react'

import Divider from '@mui/material/Divider';

import TaskList from './TaskList'
import CreateTask from "./CreateTask"

import { TaskReducer, InitialState } from "./Reducer/TaskReducer";
import { createTask, deleteTask, setTaskInEdit, toggleEditModal, updateTask } from './Actions/TaskActions';



const TaskContainer = () => {

  const [state, dispatch] = useReducer(TaskReducer, InitialState);
  const { tasks, showEditModal, taskInEdit } = state;

  const createTaskHandler = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const formObject = Object.fromEntries(data.entries());
    dispatch(createTask(formObject));
  };

  const deleteTaskHandler = (id) => {
    dispatch(deleteTask(id));
  };

  const editTaskHandler = (event, id) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const formObject = Object.fromEntries(data.entries());
    dispatch(updateTask(formObject, id));
    handleDialogClose();
  };

  const handleDialogClose = () => {
    dispatch(toggleEditModal(false));
    dispatch(setTaskInEdit({}));
  }

  return (
    <>
      <CreateTask
        createTaskHandler={createTaskHandler}
      />
      <Divider />
      <TaskList
        tasks={tasks}
        deleteTaskHandler={deleteTaskHandler}
        editTaskHandler={editTaskHandler}
        handleEditButtonClick={(task) => {
          dispatch(toggleEditModal(true));
          dispatch(setTaskInEdit(task));
        }}
        showEditModal={showEditModal}
        open={showEditModal}
        handleDialogClose={handleDialogClose}
        taskInEdit={taskInEdit}
      />
    </>
  )
}

export default TaskContainer

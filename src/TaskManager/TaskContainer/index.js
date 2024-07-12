import React, { useReducer } from 'react'

import Divider from '@mui/material/Divider';

import TaskList from './TaskList'
import CreateTask from "./CreateTask"

import { TaskReducer, InitialState } from "./Reducer/TaskReducer";
import { createTask, deleteTask, setTaskInEdit, setTaskOrder, toggleEditModal, updateTask } from './Actions/TaskActions';



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

  const handleSortButtonClick = (tasks) => {
    // Priority mapping to numerical values
    const priorityMapping = {
      "NA": 0,
      'Low': 1,
      'Medium': 2,
      'High': 3
    };
    const sortedTasks = tasks.sort((a, b) => {
      return priorityMapping[b.priority] - priorityMapping[a.priority];
    });
    dispatch(setTaskOrder(sortedTasks));
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
        handleSortButtonClick={handleSortButtonClick}
      />
    </>
  )
}

export default TaskContainer

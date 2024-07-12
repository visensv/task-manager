import React from 'react'
import PropTypes from 'prop-types'
import TaskItem from '../TaskItem'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import DialogBox from '../../Components/DialogBox';
import CreateTask from '../CreateTask';

const boxStyles = { p: 5 };

const TaskList = ({ tasks, deleteTaskHandler, editTaskHandler, handleEditButtonClick, showEditModal, taskInEdit, handleDialogClose }) => {
  const renderTasks = (tasks) => {
    return tasks.map((task) => {
      return <TaskItem
        key={task.id}
        task={task}
        secondaryAction={deleteTaskHandler}
        mainAction={handleEditButtonClick}
      />
    })
  }
  return (
    <>
      <Box sx={boxStyles}>
        <Stack
          flexDirection={"row"}
          alignItems="center"
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          useFlexGap
          justifyContent="center"
          flexWrap={"wrap"}
        >
          {renderTasks(tasks)}
        </Stack>
      </Box>
      <DialogBox
        title="Edit Task"
        open={showEditModal}
        handleDialogClose={handleDialogClose}
        task={taskInEdit}
      >
        <CreateTask
          key={taskInEdit?.id}
          task={taskInEdit}
          createTaskHandler={editTaskHandler}
          handleDialogClose={handleDialogClose}
        />
      </DialogBox>
    </>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      taskName: PropTypes.string,
      description: PropTypes.string,
      priority: PropTypes.oneOf(['Low', 'Medium', 'High']),
    })
  ).isRequired,
  deleteTaskHandler: PropTypes.func.isRequired,
  editTaskHandler: PropTypes.func.isRequired,
  handleEditButtonClick: PropTypes.func.isRequired,
  showEditModal: PropTypes.bool,
  taskInEdit: PropTypes.object,
  handleDialogClose: PropTypes.func.isRequired,
}

export default TaskList

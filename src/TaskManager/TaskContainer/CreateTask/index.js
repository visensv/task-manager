import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


import SelectField from "../../Components/Select"
import Input from '../../Components/Input';

const boxStyles = { p: 2 };

const CreateTask = ({ createTaskHandler, task }) => {

  const { taskName, description, priority } = task || {};
  const [resetKey, setResetKey] = useState(0);
  const buttonText = taskName ? 'Update Task' : 'Create Task';

  // Handle form submission
  const handleSubmit = (event, id) => {
    event.preventDefault();
    createTaskHandler(event, id);
    // Change the key to force remount and thus reset the form fields
    setResetKey(prevKey => prevKey + 1);
  };

  return <Box sx={boxStyles}>
    <form autoComplete='off' onSubmit={(event) => handleSubmit(event, task?.id)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={8}>
          <Input key={`taskName-${resetKey}`} label='Task Name' name='taskName' value={taskName} required={true} />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <SelectField key={`priority-${resetKey}`} options={['Low', 'Medium', 'High']} label='Priority' name="priority" value={priority} />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Input key={`description-${resetKey}`} label='Description' name='description' value={description} multiline={ true } />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Button variant="contained" color="success" type='submit'>
            {buttonText}
          </Button>
        </Grid>
      </Grid>
    </form>
  </Box>
}

CreateTask.propTypes = {
  createTaskHandler: PropTypes.func.isRequired,
  task: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    taskName: PropTypes.string,
    description: PropTypes.string,
    priority: PropTypes.oneOf(['Low', 'Medium', 'High']),
  }),
}

export default CreateTask

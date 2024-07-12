import React from 'react'
import PropTypes from 'prop-types'
import CardItem from '../../Components/CardItem'

const TaskItem = ({task, secondaryAction, mainAction}) => {
  return (
    <CardItem
    secondaryAction={secondaryAction}
      mainAction={mainAction}
      task={task}
    >
      <h3>{task.taskName}</h3>
      <p>{task.description}</p>
    </CardItem>
  )
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    taskName: PropTypes.string,
    description: PropTypes.string,
    priority: PropTypes.oneOf(['Low', 'Medium', 'High', 'NA']),
  }).isRequired,
  secondaryAction: PropTypes.func.isRequired,
  mainAction: PropTypes.func.isRequired,
}

export default TaskItem

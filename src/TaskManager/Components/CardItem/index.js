import * as React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const styles = {
  cardStyles: { width: 300, height: 300, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
  cardContentStyles: { overflow: 'auto' },
  cardActionsStyles: { display: 'flex', justifyContent: 'space-between' },
};

const CardItem = ({children, secondaryAction, mainAction, task}) => {
  return (
    <Card sx={styles.cardStyles}>
      <CardContent sx={styles.cardContentStyles}>
        {children}
      </CardContent>
      <CardActions sx={styles.cardActionsStyles}>
        <Button size="small" variant='outlined' onClick={() => mainAction(task)}>Edit</Button>
        {secondaryAction && <IconButton aria-label="delete" onClick={() => secondaryAction(task.id)}>
          <DeleteIcon />
        </IconButton>}
      </CardActions>
    </Card>
  );
}

CardItem.propTypes = {
  children: PropTypes.node.isRequired,
  secondaryAction: PropTypes.func,
  mainAction: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
};

export default CardItem;

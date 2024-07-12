import * as React from 'react';
import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';

const Input = ({ value, name, label, required, variant='outlined' }) => {
    const [fieldValue, setFieldValue] = React.useState();

    React.useEffect(() => {
        setFieldValue(value);
    }, [value]);

    return (
        <TextField
            id="outlined-controlled"
            label={label}
            value={fieldValue}
            name={name}
            onChange={(event) => {
                setFieldValue(event.target.value);
            }}
            required={required}
            variant={variant}
            fullWidth
        />
    );
}

Input.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    variant: PropTypes.string,
};
  
export default Input;

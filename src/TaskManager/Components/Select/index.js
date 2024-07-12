import * as React from 'react';
import PropTypes from 'prop-types';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectField = ({ options, label, name, value }) => {
    const [selectedOption, setSelectedOption] = React.useState('');

    React.useEffect(() => {
        setSelectedOption(value);
    }, [value]);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedOption}
                label="Age"
                onChange={handleChange}
                name={name}
            >
                {options?.map((item) => <MenuItem key={"item"} value={item}>{item}</MenuItem>)}
            </Select>
        </FormControl>
    );
}

SelectField.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
  };

export default SelectField;

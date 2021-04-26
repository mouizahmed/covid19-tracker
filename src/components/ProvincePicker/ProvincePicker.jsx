import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

//import styles from './ProvincePicker.module.css';

const ProvincePicker = () => {

    return (
        <div>
            <Link to="/province">
                <Button variant="contained" color="primary">Select Province</Button>
            </Link>
        </div>
    );
}

export default ProvincePicker;
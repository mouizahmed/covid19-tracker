import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountry } from '../../api';

import styles from './ProvinceInfo2.module.css';



const ProvinceInfo2 = ({ handleCountryChange2 }) => {
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        const fetchMyAPI = async () => {
            const initialNewData = await fetchCountry();
            setNewData(initialNewData);
        };

        fetchMyAPI();
    }, []);

    return (
      <div>
        <FormControl className="styles.form" variant="filled">
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange2(e.target.value)}>
        <option value="" disabled selected className={styles.firstOption}>Select Province 2</option>
        {newData.map((newData, i) => <option key={i} value={i}>{newData.name}</option>)}
    
      </NativeSelect>
    </FormControl>
    </div>
    );
}

export default ProvinceInfo2;
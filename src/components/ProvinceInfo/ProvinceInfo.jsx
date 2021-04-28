import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountry } from '../../api';

//import styles from './ProvinceInfo.module.css';



const ProvinceInfo = ({ handleCountryChange }) => {
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
        <FormControl>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Select Province</option>
        {newData.map((newData, i) => <option key={i} value={i}>{newData.name}</option>)}
        
      </NativeSelect>
    </FormControl>
    </div>
    );
}

export default ProvinceInfo;
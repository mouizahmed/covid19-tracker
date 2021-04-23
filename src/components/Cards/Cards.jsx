import Reactm, { useState, useEffect } from 'react';
import { fetchData } from '../../api';

import styles from './Cards.module.css';

const Cards = ({data}) => {
  

    const [newData, setNewData] = useState([]);

    useEffect(() => {
        const fetchMyAPI = async () => {
            const initialNewData = await fetchData();
            setNewData(initialNewData);
        };

        fetchMyAPI();
    }, []);

    console.log(newData);

    return (
        <div>
            <h1>Cards</h1>
            {newData.map(newData => <h1 key="total_cases">{newData.total_cases}</h1>)}
        </div>
    );
}

export default Cards;
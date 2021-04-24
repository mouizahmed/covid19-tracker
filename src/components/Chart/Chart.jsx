import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, line } from 'react-chartjs-2';
import { Grid, Card, CardContent, CardHeader } from '@material-ui/core';


import styles from './Chart.module.css';

const Chart = (data) => {

    const [newData, setNewData] = useState([]);

    useEffect(() => {
        const fetchMyAPI = async () => {
            const initialNewData = await fetchDailyData();
            setNewData(initialNewData);
        };

        fetchMyAPI();
    }, []);
    console.log(newData);

    const lineChart = (
        newData[0] ? (
            <Line
                data={{
                    labels: newData.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: newData.map((data) => data.total_cases),
                        label: 'Cases',
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: newData.map((data) => data.total_fatalities),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    }, {
                        data: newData.map((data) => data.total_recoveries),
                        label: 'Recoveries',
                        borderColor: 'green',
                        backgroundColor: 'rgba(0, 255, 0, 0.5)',
                        fill: true,
                    },
                    ],
                }}
            />
        ) : null
    );

    return (
        <div className={styles.container}>
            <Card className={styles.card}>
                <CardHeader className={styles.header}
                    title="Canada Cumulative"
                />
                <CardContent className={styles.content}>
                    {lineChart}
                </CardContent>
            </Card>
        </div>
    );
}

export default Chart;
import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line } from 'react-chartjs-2';
import { Card, CardContent, CardHeader, Grid } from '@material-ui/core';


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
                    options: {
                        animation: {
                            duration: 0
                        }
                    },
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
                        hidden: true,
                    }, {
                        data: newData.map((data) => data.total_recoveries),
                        label: 'Recoveries',
                        borderColor: 'green',
                        backgroundColor: 'rgba(0, 255, 0, 0.5)',
                        fill: true,
                        hidden: true,
                    }, {
                        data: newData.map((data) => data.total_tests),
                        label: 'Testing',
                        borderColor: 'purple',
                        backgroundColor: 'rgba(0, 0, 255, 0.3)',
                        fill: true,
                        hidden: true,
                    }, {
                        data: newData.map((data) => data.total_hospitalizations),
                        label: 'Hospitalizations',
                        borderColor: 'yellow',
                        backgroundColor: 'rgba(255, 255, 0, 0.2',
                        fill: true,
                        hidden: true,
                    }, {
                        data: newData.map((data) => data.total_vaccinations),
                        label: 'Vaccinations',
                        borderColor: 'black',
                        backgroundColor: 'rgba(0, 0, 100, 0.1)',
                        fill: true,
                        hidden: true,
                    }, {
                        data: newData.map((data) => data.total_criticals),
                        label: 'Criticals',
                        borderColor: 'orange',
                        backgroundColor: 'rgba(255, 100, 0, 0.3)',
                        fill: true,
                        hidden: true,
                    },
                    ],
                }}
            />
        ) : null
    );

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item xs>
                    <Card className={styles.card}>
                        <CardHeader className={styles.header}
                            title="Canada Cumulative"
                        />
                        <CardContent className={styles.content}>
                            {lineChart}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card className={styles.card}>
                        <CardHeader className={styles.header}
                            title="Map" />
                            <CardContent className={styles.content}>
                                
                            </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Chart;
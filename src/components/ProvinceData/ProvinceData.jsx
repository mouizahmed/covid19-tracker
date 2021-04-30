import React from 'react';
import { Line } from 'react-chartjs-2';
import { Typography, Grid, Card, CardHeader, CardContent, Switch, FormControlLabel } from '@material-ui/core';


import styles from './ProvinceData.module.css';

const ProvinceData = (props) => {
    console.log(props.data.province);
    console.log(props.country);

    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };






    const lineChart = (
        props.country ? (
            <Line
                data={{
                    labels: props.country.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: props.country.map(({ total_cases }) => total_cases),
                        label: 'Cases',
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: props.country.map(({ total_fatalities }) => total_fatalities),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                        spanGaps: true,
                        hidden: true,
                    }, {
                        data: props.country.map(({ total_recoveries }) => total_recoveries),
                        label: 'Recoveries',
                        borderColor: 'green',
                        backgroundColor: 'rgba(0, 255, 0, 0.5)',
                        fill: true,
                        spanGaps: true,
                        hidden: true,
                    }, {
                        data: props.country.map(({ total_tests }) => total_tests),
                        label: 'Testing',
                        borderColor: 'purple',
                        backgroundColor: 'rgba(0, 0, 255, 0.3)',
                        fill: true,
                        spanGaps: true,
                        hidden: true,
                    }, {
                        data: props.country.map(({ total_hospitalizations }) => total_hospitalizations),
                        label: 'Hospitalizations',
                        borderColor: 'yellow',
                        backgroundColor: 'rgba(255, 255, 0, 0.2',
                        fill: true,
                        spanGaps: true,
                        hidden: true,
                    }, {
                        data: props.country.map(({ total_vaccinations }) => total_vaccinations),
                        label: 'Vaccinations',
                        borderColor: 'black',
                        backgroundColor: 'rgba(0, 0, 100, 0.1)',
                        fill: true,
                        spanGaps: true,
                        hidden: true,
                    }, {
                        data: props.country.map(({ total_criticals }) => total_criticals),
                        label: 'Criticals',
                        borderColor: 'orange',
                        backgroundColor: 'rgba(255, 100, 0, 0.3)',
                        fill: true,
                        spanGaps: true,
                        hidden: true,
                    },
                    ],
                }}
            />
        ) : null
    );

    const lineChart2 = (
        props.country ? (
            <Line
                data={{
                    labels: props.country.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: props.country.map(({ change_cases }) => change_cases),
                        label: 'Cases',
                        borderColor: '#3333ff',
                        fill: true,
                        spanGaps: true
                    }, {
                        data: props.country.map(({ change_fatalities }) => change_fatalities),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                        spanGaps: true,
                        hidden: true,
                    }, {
                        data: props.country.map(({ change_recoveries }) => change_recoveries),
                        label: 'Recoveries',
                        borderColor: 'green',
                        backgroundColor: 'rgba(0, 255, 0, 0.5)',
                        fill: true,
                        spanGaps: true,
                        hidden: true,
                    }, {
                        data: props.country.map(({ change_tests }) => change_tests),
                        label: 'Testing',
                        borderColor: 'purple',
                        backgroundColor: 'rgba(0, 0, 255, 0.3)',
                        fill: true,
                        spanGaps: true,
                        hidden: true,
                    }, {
                        data: props.country.map(({ change_hospitalizations }) => change_hospitalizations),
                        label: 'Hospitalizations',
                        borderColor: 'yellow',
                        backgroundColor: 'rgba(255, 255, 0, 0.2',
                        fill: true,
                        spanGaps: true,
                        hidden: true,
                    }, {
                        data: props.country.map(({ change_vaccinations }) => change_vaccinations),
                        label: 'Vaccinations',
                        borderColor: 'black',
                        backgroundColor: 'rgba(0, 0, 100, 0.1)',
                        fill: true,
                        spanGaps: true,
                        hidden: true,
                    },  {
                        data: props.country.map(({ change_criticals }) => change_criticals),
                        label: 'Criticals',
                        borderColor: 'orange',
                        backgroundColor: 'rgba(255, 100, 0, 0.3)',
                        fill: true,
                        spanGaps: true,
                        hidden: true,
                    },
                    ]
                }}
            />
        ) : null
    );



    return (




        <div className={styles.container}>
            {props.country ? (<Grid container spacing={3} justify="center">
                <Grid item xs>
                    <Card className={styles.card}>
                        <CardContent className={styles.cases}>
                            <Typography variant="h5" component="h2">
                                {props.data.total_cases} cases
                </Typography>
                            <Typography color="textSecondary">
                                (+{props.data.change_cases} today)
                </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs>
                    <Card className={styles.card}>
                        <CardContent className={styles.deaths}>
                            <Typography variant="h5" component="h2">
                                {props.data.total_fatalities} deaths
                </Typography>
                            <Typography color="textSecondary">
                                (+{props.data.change_fatalities} today)
                </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs>
                    <Card className={styles.hospitalizations}>
                        <CardContent className={styles.hospitalizations}>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={state.checkedA}
                                        onChange={handleChange}
                                        name="checkedA"

                                    />
                                }
                                labelPlacement="end"
                                label={state.checkedA ? <div><Typography variant="h5" component="h2">
                                    {props.data.total_criticals} critical
                    </Typography> <Typography color="textSecondary">
                                        (+{props.data.change_criticals} today)
                        </Typography></div> : <div><Typography variant="h5" component="h2">
                                    {props.data.total_hospitalizations} hospitalized
                        </Typography> <Typography color="textSecondary">
                                        ({props.data.change_hospitalizations} today)
                        </Typography></div>}
                            />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs>
                    <Card className={styles.recoveries}>
                        <CardContent className={styles.recoveries}>
                            <Typography variant="h5" component="h2">
                                {props.data.total_recoveries} recoveries
                </Typography>
                            <Typography color="textSecondary">
                                (+{props.data.change_recoveries} today)
                </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs>
                    <Card className={styles.card}>
                        <CardContent className={styles.tests}>
                            <Typography variant="h5" component="h2">
                                {props.data.total_tests} tests
                </Typography>
                            <Typography color="textSecondary">
                                (+{props.data.change_tests} today)
                </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs>
                    <Card className={styles.card}>
                        <CardContent className={styles.vaccinations}>
                            <Typography variant="h5" component="h2">
                                {props.data.total_vaccinations} vaccinations
                </Typography>
                            <Typography color="textSecondary">
                                (+{props.data.change_vaccinations} today)
                </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>) : (null)}
            {/* {props.data.province} */}

            <Grid container spacing={3} justify="center">
                <Grid item xs>
                    <Card className={styles.cards}>
                    {props.country ? (<CardHeader className={styles.header} title={props.data.province + " Culmulative Cases"} />) : (<CardHeader className={styles.header} title={"Culmulative Cases"} />)}
                        <CardContent className={styles.content}>
                            {lineChart}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card className={styles.cards}>
                        {props.country ? (<CardHeader className={styles.header} title={props.data.province + " New Cases by Day"} />) : (<CardHeader className={styles.header} title={"New Cases by Day"} />)}
                        <CardContent className={styles.content}>
                            {lineChart2}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </div>



    );
}

export default ProvinceData;
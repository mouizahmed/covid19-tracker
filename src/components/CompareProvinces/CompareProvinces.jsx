import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Grid, Card, CardHeader, CardContent, FormControl, NativeSelect} from '@material-ui/core';


import styles from './CompareProvinces.module.css';




const CompareProvinces = (props) => {
    //console.log(props.data3.province);
    const [value, setValue] = useState('');

    const handleCountryChange3 = async (i) => {
        //console.log(i);
        setValue(i);

    }

    console.log(value);
    const lineChart = (
        props.country && props.country2 && value === '1' ? (
            <Line
                data={{
                    labels: props.country.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: props.country.map(({ total_cases }) => total_cases),
                        label: props.data.province,
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: props.country2.map(({ total_cases }) => total_cases),
                        label: props.data2.province,
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                        spanGaps: true,
                    },
                    ],
                }}
            />
        ) : props.country && props.country2 && value === '2' ? (
            <Line
                data={{
                    labels: props.country.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: props.country.map(({ total_fatalities }) => total_fatalities),
                        label: props.data.province,
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: props.country2.map(({ total_fatalities }) => total_fatalities),
                        label: props.data2.province,
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                        spanGaps: true,
                    },
                    ],
                }}
            />
        ) : props.country && props.country2 && value === '3' ? (
            <Line
                data={{
                    labels: props.country.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: props.country.map(({ total_recoveries }) => total_recoveries),
                        label: props.data.province,
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: props.country2.map(({ total_recoveries }) => total_recoveries),
                        label: props.data2.province,
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                        spanGaps: true,
                    },
                    ],
                }}
            />
        ) : props.country && props.country2 && value === '4' ? (
            <Line
                data={{
                    labels: props.country.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: props.country.map(({ total_hospitalizations }) => total_hospitalizations),
                        label: props.data.province,
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: props.country2.map(({ total_hospitalizations }) => total_hospitalizations),
                        label: props.data2.province,
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                        spanGaps: true,
                    },
                    ],
                }}
            />
        ) : props.country && props.country2 && value === '5' ? (
            <Line
                data={{
                    labels: props.country.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: props.country.map(({ total_criticals }) => total_criticals),
                        label: props.data.province,
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: props.country2.map(({ total_criticals }) => total_criticals),
                        label: props.data2.province,
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                        spanGaps: true,
                    },
                    ],
                }}
            />
        ) : props.country && props.country2 && value === '6' ? (
            <Line
                data={{
                    labels: props.country.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: props.country.map(({ total_tests }) => total_tests),
                        label: props.data.province,
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: props.country2.map(({ total_tests }) => total_tests),
                        label: props.data2.province,
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                        spanGaps: true,
                    },
                    ],
                }}
            />
        ) : props.country && props.country2 && value === '7' ? (
            <Line
                data={{
                    labels: props.country.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: props.country.map(({ total_vaccinations }) => total_vaccinations),
                        label: props.data.province,
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: props.country2.map(({ total_vaccinations }) => total_vaccinations),
                        label: props.data2.province,
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                        spanGaps: true,
                    },
                    ],
                }}
            />
        ) : (null)
    );

    const lineChart2 = (
        props.country && props.country2 && value === '1' ? (
            <Line
                data={{
                    labels: props.country.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: props.country.map(({ change_cases }) => change_cases),
                        label: props.data.province,
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: props.country2.map(({ change_cases }) => change_cases),
                        label: props.data2.province,
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                        spanGaps: true,
                    },
                    ],
                }}
            />
        ) : props.country && props.country2 && value === '2' ? (
            <Line
                data={{
                    labels: props.country.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: props.country.map(({ change_fatalities }) => change_fatalities),
                        label: props.data.province,
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: props.country2.map(({ change_fatalities }) => change_fatalities),
                        label: props.data2.province,
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                        spanGaps: true,
                    },
                    ],
                }}
            />
        ) : props.country && props.country2 && value === '3' ? (
            <Line
                data={{
                    labels: props.country.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: props.country.map(({ change_recoveries }) => change_recoveries),
                        label: props.data.province,
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: props.country2.map(({ change_recoveries }) => change_recoveries),
                        label: props.data2.province,
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                        spanGaps: true,
                    },
                    ],
                }}
            />
        ) : props.country && props.country2 && value === '4' ? (
            <Line
                data={{
                    labels: props.country.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: props.country.map(({ change_hospitalizations }) => change_hospitalizations),
                        label: props.data.province,
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: props.country2.map(({ change_hospitalizations }) => change_hospitalizations),
                        label: props.data2.province,
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                        spanGaps: true,
                    },
                    ],
                }}
            />
        ) : props.country && props.country2 && value === '5' ? (
            <Line
                data={{
                    labels: props.country.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: props.country.map(({ change_criticals }) => change_criticals),
                        label: props.data.province,
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: props.country2.map(({ change_criticals }) => change_criticals),
                        label: props.data2.province,
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                        spanGaps: true,
                    },
                    ],
                }}
            />
        ) : props.country && props.country2 && value === '6' ? (
            <Line
                data={{
                    labels: props.country.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: props.country.map(({ change_tests }) => change_tests),
                        label: props.data.province,
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: props.country2.map(({ change_tests }) => change_tests),
                        label: props.data2.province,
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                        spanGaps: true,
                    },
                    ],
                }}
            />
        ) : props.country && props.country2 && value === '7' ? (
            <Line
                data={{
                    labels: props.country.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: props.country.map(({ change_vaccinations }) => change_vaccinations),
                        label: props.data.province,
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: props.country2.map(({ change_vaccinations }) => change_vaccinations),
                        label: props.data2.province,
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                        spanGaps: true,
                    },
                    ],
                }}
            />
        ) : (null)
    );



    return (




        <div className={styles.container}>
            <FormControl>
                <NativeSelect onChange={(e) => handleCountryChange3(e.target.value)}>
                    <option value="" disabled selected className={styles.firstOption}>Select Type</option>
                    <option value="1">Cases</option>
                    <option value="2">Deaths</option>
                    <option value="3">Recoveries</option>
                    <option value="4">Hospitalizations</option>
                    <option value="5">Criticals</option>
                    <option value="6">Testing</option>
                    <option value="7">Vaccinations</option>


                </NativeSelect>
            </FormControl>



            { props.country && props.country2 && value === '1' ? (
                <Grid container spacing={3} justify="center">
                    <Grid item xs>
                        <Card className={styles.cards}>
                            {props.country ? (<CardHeader className={styles.header} title={props.data.province + " vs. " + props.data2.province + " Culmulative Cases"} />) : (<CardHeader className={styles.header} title={"Culmulative Cases"} />)}
                            <CardContent className={styles.content}>
                                {lineChart}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card className={styles.cards}>
                            {props.country ? (<CardHeader className={styles.header} title={props.data.province + " vs. " + props.data2.province + " New Cases by Day"} />) : (<CardHeader className={styles.header} title={"New Cases by Day"} />)}
                            <CardContent className={styles.content}>
                                {lineChart2}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            ) : props.country && props.country2 && value === '2' ? (
                <Grid container spacing={3} justify="center">
                    <Grid item xs>
                        <Card className={styles.cards}>
                            {props.country ? (<CardHeader className={styles.header} title={props.data.province + " vs. " + props.data2.province + " Culmulative Deaths"} />) : (<CardHeader className={styles.header} title={"Culmulative Cases"} />)}
                            <CardContent className={styles.content}>
                                {lineChart}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card className={styles.cards}>
                            {props.country ? (<CardHeader className={styles.header} title={props.data.province + " vs. " + props.data2.province + " New Deaths by Day"} />) : (<CardHeader className={styles.header} title={"New Cases by Day"} />)}
                            <CardContent className={styles.content}>
                                {lineChart2}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            ) : props.country && props.country2 && value === '3' ? (
                <Grid container spacing={3} justify="center">
                    <Grid item xs>
                        <Card className={styles.cards}>
                            {props.country ? (<CardHeader className={styles.header} title={props.data.province + " vs. " + props.data2.province + " Culmulative Recoveries"} />) : (<CardHeader className={styles.header} title={"Culmulative Cases"} />)}
                            <CardContent className={styles.content}>
                                {lineChart}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card className={styles.cards}>
                            {props.country ? (<CardHeader className={styles.header} title={props.data.province + " vs. " + props.data2.province + " New Recoveries by Day"} />) : (<CardHeader className={styles.header} title={"New Cases by Day"} />)}
                            <CardContent className={styles.content}>
                                {lineChart2}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            ) : props.country && props.country2 && value === '4' ? (
                <Grid container spacing={3} justify="center">
                    <Grid item xs>
                        <Card className={styles.cards}>
                            {props.country ? (<CardHeader className={styles.header} title={props.data.province + " vs. " + props.data2.province + " Culmulative Hospitalizations"} />) : (<CardHeader className={styles.header} title={"Culmulative Cases"} />)}
                            <CardContent className={styles.content}>
                                {lineChart}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card className={styles.cards}>
                            {props.country ? (<CardHeader className={styles.header} title={props.data.province + " vs. " + props.data2.province + " New Hospitalizations by Day"} />) : (<CardHeader className={styles.header} title={"New Cases by Day"} />)}
                            <CardContent className={styles.content}>
                                {lineChart2}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            ) : props.country && props.country2 && value === '5' ? (
                <Grid container spacing={3} justify="center">
                    <Grid item xs>
                        <Card className={styles.cards}>
                            {props.country ? (<CardHeader className={styles.header} title={props.data.province + " vs. " + props.data2.province + " Culmulative Criticals"} />) : (<CardHeader className={styles.header} title={"Culmulative Cases"} />)}
                            <CardContent className={styles.content}>
                                {lineChart}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card className={styles.cards}>
                            {props.country ? (<CardHeader className={styles.header} title={props.data.province + " vs. " + props.data2.province + " New Criticals by Day"} />) : (<CardHeader className={styles.header} title={"New Cases by Day"} />)}
                            <CardContent className={styles.content}>
                                {lineChart2}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            ) : props.country && props.country2 && value === '6' ? (
                <Grid container spacing={3} justify="center">
                    <Grid item xs>
                        <Card className={styles.cards}>
                            {props.country ? (<CardHeader className={styles.header} title={props.data.province + " vs. " + props.data2.province + " Culmulative Tests"} />) : (<CardHeader className={styles.header} title={"Culmulative Cases"} />)}
                            <CardContent className={styles.content}>
                                {lineChart}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card className={styles.cards}>
                            {props.country ? (<CardHeader className={styles.header} title={props.data.province + " vs. " + props.data2.province + " New Tests by Day"} />) : (<CardHeader className={styles.header} title={"New Cases by Day"} />)}
                            <CardContent className={styles.content}>
                                {lineChart2}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            ) : props.country && props.country2 && value === '7' ? (
                <Grid container spacing={3} justify="center">
                    <Grid item xs>
                        <Card className={styles.cards}>
                            {props.country ? (<CardHeader className={styles.header} title={props.data.province + " vs. " + props.data2.province + " Culmulative Vaccinations"} />) : (<CardHeader className={styles.header} title={"Culmulative Cases"} />)}
                            <CardContent className={styles.content}>
                                {lineChart}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card className={styles.cards}>
                            {props.country ? (<CardHeader className={styles.header} title={props.data.province + " vs. " + props.data2.province + " New Vaccinations by Day"} />) : (<CardHeader className={styles.header} title={"New Cases by Day"} />)}
                            <CardContent className={styles.content}>
                                {lineChart2}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            ) : null}


        </div>



    );
}

export default CompareProvinces;
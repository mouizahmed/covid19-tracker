import React, { useState, useEffect } from 'react';
import { countryData } from '../../api';
import { Line } from 'react-chartjs-2';
import { Typography, Grid, Card, CardContent, Switch, FormControlLabel } from '@material-ui/core';


import styles from './ProvinceData.module.css';

const ProvinceData = (props) => {
    console.log(props.data.province);

    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };


    return (
    
     


<div className={styles.container}>
<Grid container spacing={3} justify="center">
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
</Grid>



</div>




    );
}

export default ProvinceData;
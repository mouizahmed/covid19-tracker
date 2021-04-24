import React, { useState, useEffect } from 'react';
import { fetchData } from '../../api';

import styles from './Cards.module.css';
import { Typography, Grid, Card, CardContent, Switch, FormControlLabel } from '@material-ui/core';


const Cards = ({ data }) => {




    const [newData, setNewData] = useState([]);

    useEffect(() => {
        const fetchMyAPI = async () => {
            const initialNewData = await fetchData();
            setNewData(initialNewData);
        };

        fetchMyAPI();
    }, []);
    console.log(newData);

    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };




    // console.log(data);

    return (
        <div className={styles.container}>

            <Grid container spacing={3} justify="center">
                <Grid item xs>
                    <Card className={styles.card}>
                        <CardContent className={styles.cases}>
                            <Typography variant="h5" component="h2">
                                {newData.map(newData => <div className={styles.text_main} key="total_cases">{newData.total_cases} cases</div>)}
                            </Typography>
                            <Typography color="textSecondary">
                                {newData.map(newData => <div className={styles.text_secondary} key="change_cases">(+{newData.change_cases} today)</div>)}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs>
                    <Card className={styles.card}>
                        <CardContent className={styles.deaths}>
                            <Typography variant="h5" component="h2">
                                {newData.map(newData => <div className={styles.text_main} key="total_fatalities">{newData.total_fatalities} deaths</div>)}
                            </Typography>
                            <Typography color="textSecondary">
                                {newData.map(newData => <div className={styles.text_secondary} key="change_fatalities">(+{newData.change_fatalities} today)</div>)}
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
                                    {newData.map(newData => <div className={styles.text_main} key="total_criticals">{newData.total_criticals} critical</div>)}
                                </Typography> <Typography color="textSecondary">
                                        {newData.map(newData => <div className={styles.text_secondary} key="change_criticals">(+{newData.change_criticals} today)</div>)}
                                    </Typography></div> : <div><Typography variant="h5" component="h2">
                                        {newData.map(newData => <div className={styles.text_main} key="total_hospitalizations">{newData.total_hospitalizations} hospitalized</div>)}
                                    </Typography> <Typography color="textSecondary">
                                        {newData.map(newData => <div className={styles.text_secondary} key="change_hospitalizations">({newData.change_hospitalizations} today)</div>)}
                                    </Typography></div>}
                            />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs>
                    <Card className={styles.recoveries}>
                        <CardContent className={styles.recoveries}>
                            <Typography variant="h5" component="h2">
                                {newData.map(newData => <div className={styles.text_main} key="total_recoveries">{newData.total_recoveries} recoveries</div>)}
                            </Typography>
                            <Typography color="textSecondary">
                                {newData.map(newData => <div className={styles.text_secondary} key="change_recoveries">(+{newData.change_recoveries} today)</div>)}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs>
                    <Card className={styles.card}>
                        <CardContent className={styles.tests}>
                            <Typography variant="h5" component="h2">
                                {newData.map(newData => <div className={styles.text_main} key="total_tests">{newData.total_tests} tests</div>)}
                            </Typography>
                            <Typography color="textSecondary">
                                {newData.map(newData => <div className={styles.text_secondary} key="change_tests">(+{newData.change_tests} today)</div>)}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs>
                    <Card className={styles.card}>
                        <CardContent className={styles.vaccinations}>
                            <Typography variant="h5" component="h2">
                                {newData.map(newData => <div className={styles.text_main} key="total_vaccinations">{newData.total_vaccinations} vaccinations</div>)}
                            </Typography>
                            <Typography color="textSecondary">
                                {newData.map(newData => <div className={styles.text_secondary} key="change_vaccinations">(+{newData.change_vaccinations} today)</div>)}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>







        </div>
    );
}

export default Cards;
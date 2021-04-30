import React from 'react';

import { ProvinceInfo, ProvinceInfo2, ProvinceData, CompareProvinces, Cards, Chart } from './components';
import NotFoundPage from './pages/404';
import Main from './pages/Main.jsx';
import { fetchDailyData, fetchData, countryData, countryData2, dailyProvince, dailyProvinceCompared } from './api/';
import { Button } from '@material-ui/core';

import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

//import styles from './App.module.css';

class App extends React.Component {

    state = {
        data: {},
        daily: {},
        province: {},
        country: [],
    }

    async componentDidMount() {

        this.baseState = this.state;

        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
        //console.log({ data: fetchedData });

        const fetchedDailyData = await fetchDailyData();
        this.setState({ daily: fetchedDailyData });

    }

    handleCountryChange = async (i) => {
        const data = await countryData(i);
        //console.log(data.province);



        this.setState({ data });


        const initialNewData = await dailyProvince(data.province);
        this.setState({ initialNewData })

    }

    handleCountryChange2 = async (i2) => {
        const data2 = await countryData2(i2);
        this.setState({ data2 });

        const comparedProvince = await dailyProvinceCompared(data2.province);
        this.setState({ comparedProvince });

    }

    render() {
        const { data, data2, initialNewData, comparedProvince } = this.state;
        return (
            <Router>

                <Switch>
                    <Route exact path="/" handleCountryChange={this.handleCountryChange} render={props =>
                        <React.Fragment>
                            <Cards />
                            <div>
                                <Link to="/province">
                                    <Button variant="contained" color="primary" onClick={this.baseState}>Select Province</Button>
                                </Link>
                                <Link to="/compareprovinces">
                                    <Button variant="contained" color="primary" onClick={this.baseState}>Compare Provinces</Button>
                                </Link>
                            </div>
                            <Chart />
                        </React.Fragment>} />
                    <Route exact path="/province" render={props => <React.Fragment> <div> <Link to="/"> <Button variant="contained" color="primary" onClick={this.baseState}>Back</Button> </Link> </div><ProvinceInfo handleCountryChange={this.handleCountryChange} /> <ProvinceData data={data} country={initialNewData} /> </React.Fragment>} />
                    <Route exact path="/compareprovinces" render={props => <React.Fragment> <div> <Link to="/"> <Button variant="contained" color="primary" onClick={this.baseState}>Back</Button> </Link> </div> <ProvinceInfo handleCountryChange={this.handleCountryChange} /> <ProvinceInfo2 handleCountryChange2={this.handleCountryChange2} /> <CompareProvinces data={data} data2={data2} country={initialNewData} country2={comparedProvince} /> </React.Fragment>} />
                    <Route component={NotFoundPage} />
                    <Redirect to="/404" />
                    <Route />
                </Switch>
            </Router>
        );
    }
}

export default App;
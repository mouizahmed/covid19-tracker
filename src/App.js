import React from 'react';

import { ProvinceInfo, ProvinceData, ProvinceChart } from './components';
import NotFoundPage from './pages/404';
import Main from './pages/Main.jsx';
import { fetchDailyData, fetchData, fetchCountry, countryData, dailyProvince } from './api/';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//import styles from './App.module.css';

class App extends React.Component {
    
    state = {
        data: {},
        daily: {},
        province: {},
        country: [],
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData });
        //console.log({ data: fetchedData });

        const fetchedDailyData = await fetchDailyData();
        this.setState({daily: fetchedDailyData});

        const fetchedCountryData = await fetchCountry();
        //console.log(fetchedCountryData);
    }

    handleCountryChange = async (i) => { 
        const data = await countryData(i);
        //console.log(data.province);

        const FetchDailyProvince = await dailyProvince(data.province); 
        console.log(FetchDailyProvince);
        this.setState({ data, FetchDailyProvince });


        const initialNewData = await dailyProvince(data.province);
        this.setState({ initialNewData })



    }

    render() {
        const {data, FetchDailyProvince, initialNewData} = this.state;
        return (
            <Router>
                
                <Switch>
                <Route exact path="/" component={Main} handleCountryChange={this.handleCountryChange} />
                <Route exact path="/province" render={props => <React.Fragment><ProvinceInfo handleCountryChange={this.handleCountryChange} /> <ProvinceData data={data} country={initialNewData} /> </React.Fragment>} />
                <Route component={NotFoundPage} />
                <Redirect to="/404"/>
                <Route />
                </Switch>
            </Router>
        );
    }
}

export default App;
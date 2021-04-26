import React from 'react';

import { ProvinceInfo } from './components';
import NotFoundPage from './pages/404';
import Main from './pages/Main.jsx';
import { fetchDailyData, fetchData, countryData} from './api/';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//import styles from './App.module.css';

class App extends React.Component {
    
    state = {
        data: {},
        daily: {},
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData });
        //console.log({ data: fetchedData });

        const fetchedDailyData = await fetchDailyData();
        this.setState({daily: fetchedDailyData});

        const fetchedCountryData = await countryData();
        console.log(fetchedCountryData);
    }

    render() {

        return (
            <Router>
                <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/province" component={ProvinceInfo} />
                <Route component={NotFoundPage} />
                <Redirect to="/404"/>
                <Route />
                </Switch>
            </Router>
        );
    }
}

export default App;
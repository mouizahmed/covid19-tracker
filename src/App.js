import React from 'react';

import { Cards, Chart, ProvincePicker } from './components';
import { fetchDailyData, fetchData } from './api/';

import styles from './App.module.css';

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
    }

    render() {
        const { data } = this.state;
        const { daily } = this.state;

        return (
            <div>
                <Cards data={data} />
                <Chart data={daily} />
                <ProvincePicker />
            </div>
        );
    }
}

export default App;
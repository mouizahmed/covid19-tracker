import React from 'react';

import { Cards, Chart, ProvincePicker } from './components';
import { fetchData } from './api/';

import styles from './App.module.css';

class App extends React.Component {
    
    state = {
        data: {},
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData });
        //console.log({ data: fetchedData });
    }

    render() {
        const { data } = this.state;

        return (
            <div>
                <Cards data={data} />
                <Chart />
                <ProvincePicker />
            </div>
        );
    }
}

export default App;
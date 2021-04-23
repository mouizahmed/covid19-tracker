import React from 'react';

import { Cards, Chart, ProvincePicker } from './components';
import { fetchData } from './api/';

import styles from './App.module.css';

class App extends React.Component {
    
    async componentDidMount() {
        const data = await fetchData();

        console.log(data);
    }

    render() {

        return (
            <div>
                <Cards />
                <Chart />
                <ProvincePicker />
            </div>
        );
    }
}

export default App;
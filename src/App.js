import React from 'react';

import { Cards, Chart, ProvincePicker } from './components';
import { } from './api/';

import styles from './App.module.css';

class App extends React.Component {
    
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
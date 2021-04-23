import axios from 'axios';

const url = 'https://api.covid19tracker.ca/summary';

export const fetchData = async () => {
    try {
        const { data: { data}} = await axios.get(url);


        return data.map(({ total_cases, total_vaccinated, total_fatalities, total_hospitalizations, total_recoveries, total_tests }) => ({ total_cases, total_vaccinated, total_fatalities, total_hospitalizations, total_recoveries, total_tests }));
        
    } catch (error) {

    }
}
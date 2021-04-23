import axios from 'axios';

const url = 'https://api.covid19tracker.ca/summary';

export const fetchData = async () => {
    try {
        const { data: { data}} = await axios.get(url);


        return data.map(({ total_cases, change_cases, total_vaccinations, change_vaccinations, total_fatalities, change_fatalities, total_hospitalizations, change_hospitalizations, total_recoveries, change_recoveries, total_tests, change_tests}) => ({ total_cases, change_cases, total_vaccinations, change_vaccinations, total_fatalities, change_fatalities, total_hospitalizations, change_hospitalizations, total_recoveries, change_recoveries, total_tests, change_tests }));
        
    } catch (error) {

    }
}

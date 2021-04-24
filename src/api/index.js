import axios from 'axios';

const url = 'https://api.covid19tracker.ca/summary';
const url2 = 'https://api.covid19tracker.ca/reports';

export const fetchData = async () => {
    try {
        const { data: { data}} = await axios.get(url);

        return data.map(({ total_cases, change_cases, total_vaccinations, change_vaccinations, total_fatalities, change_fatalities, total_hospitalizations, change_hospitalizations, total_criticals, change_criticals, total_recoveries, change_recoveries, total_tests, change_tests}) => ({ total_cases, change_cases, total_vaccinations, change_vaccinations, total_fatalities, change_fatalities, total_hospitalizations, change_hospitalizations, total_criticals, change_criticals, total_recoveries, change_recoveries, total_tests, change_tests }));
        
    } catch (error) {

    }
}

export const fetchDailyData = async () => {
    try {
        const { data: { data}} = await axios.get(url2);
        //console.log({data: { data }});
        return data.map(({ total_cases, total_recoveries, total_fatalities, date }) => ({ total_cases, total_recoveries, total_fatalities, date }));
    } catch (error) {
        return error;
    }
}

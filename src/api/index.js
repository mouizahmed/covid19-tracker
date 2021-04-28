import axios from 'axios';

const url = 'https://api.covid19tracker.ca/summary';
const url2 = 'https://api.covid19tracker.ca/reports';
const url3 = 'https://api.covid19tracker.ca/provinces/?geo_only=true';
const url4 = 'https://api.covid19tracker.ca/summary/split';
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
        return data.map(({ total_cases, total_recoveries, total_fatalities, total_tests, total_hospitalizations, total_criticals, total_vaccinations, date }) => ({ total_cases, total_recoveries, total_fatalities, total_tests, total_hospitalizations, total_criticals, total_vaccinations, date }));
    } catch (error) {
        return error;
    }
}

export const fetchCountry = async (country) => {
    try {
        const {data: data} = await axios.get(url3);

        return data.map(({ name }) => ({ name }));
    } catch (error) {
        return error;
    }
}

export const countryData = async (i) => {
    try {
        const {data: data} = await axios.get(url4);

        return data.data[i];
       // return data.data.map(({ province, total_cases}) => ({ province, total_cases }));
    } catch (error) {
        return error;
    }
}

export const dailyProvince = async(name) => {
    try {
        const {data: data}= await axios.get(`https://api.covid19tracker.ca/reports/province/${name}`);
        
        return data.data.map(({ date, total_cases }) => ({ date, total_cases }));
        
    } catch (error) {
        return error;
    }
}


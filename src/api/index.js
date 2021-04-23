import axios from 'axios';

const url = 'https://api.covid19tracker.ca/summary';

export const fetchData = async () => {
    try {
        const data = await axios.get(url);

        return data;
    } catch (error) {

    }
}
import axios from 'axios';

const BackendApi = axios.create({
    baseURL: 'https://api-app-staging.wobot.ai/',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default BackendApi;

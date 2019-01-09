import axios from 'axios';

const KEY = 'AIzaSyD7uz-365O-Um8DuXNMRTgCZ2N19XlM14g';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

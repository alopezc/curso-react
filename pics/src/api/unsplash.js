import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID 8b932798ea0f7cc8d3b8fc9db83c7427da1b874bf8beb5cb816ecb252d3a08ef'
    }
});

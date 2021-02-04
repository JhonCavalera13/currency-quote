import axios from 'axios';
import { API_BASE_URL } from '../constants';

export const api = {
    getCoins(date) {
        console.log('api get coins')
        return dispatch({
            url: `${API_BASE_URL}/${date}`,
        });
    }
}

export function dispatch(options) {
    let config = {
        method: options.method || 'get',
        url: options.url
    }

    console.log('endpoint llamAdo')
    return axios(config)
        .then(res => res.data)
        .catch(error => console.log(error))
}

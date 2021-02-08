import { call, put } from 'redux-saga/effects';
import { coinTypesRequestActions } from '../coinTypes/actions';
import { api } from './apiService';

function* fetchEntities(apiFunction, actions, id, param) {
    try {
        yield put(actions.pending());
        const data = yield call(apiFunction, param || id);
        console.log('fetchEntities', data)

        if (data) {
            yield put(actions.success(data));
        } else
            yield put(actions.failed(data));

    }
    catch (error) {
        // console.log('fetchEntities-error', error)
        yield put(actions.failed(error));
    }
}

export const getCoins = fetchEntities.bind(null, api.getCoins, coinTypesRequestActions);
export const getCoinsBase = fetchEntities.bind(null, api.getCoinsBase, coinTypesRequestActions);

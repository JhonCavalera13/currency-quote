import { call, fork, takeEvery } from 'redux-saga/effects';
import { getCoins } from '../api';
import { coinTypesRequestActions } from './actions';

export function* getCoinTypes({ payload }) {
    console.log('acccccccaaaaa')
    const { date } = payload;
    yield call(getCoins, date);
}

//Watchers
export function* watchgetCoinTypes() {
    yield takeEvery(coinTypesRequestActions.GET_COINTYPES, getCoinTypes);
}

//Root
export const coinTypesSagas = [
    fork(watchgetCoinTypes)
];


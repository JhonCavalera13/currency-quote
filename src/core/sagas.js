import { all } from 'redux-saga/effects';
import { coinTypesSagas } from './coinTypes/sagas';

export default function* sagas() {
    yield all([
        ...coinTypesSagas
    ]);
}

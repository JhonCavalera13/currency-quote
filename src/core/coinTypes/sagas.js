import { call, fork, takeEvery } from "redux-saga/effects";
import { getCoins, getCoinsBase } from "../api";
import { coinTypesActions } from "./actions";

export function* getCoinTypes() {
  yield call(getCoins);
}

export function* coinsBase({ payload }) {
  console.log(payload);
  yield call(getCoinsBase, payload.data);
}

//Watchers
export function* watchgetCoinTypes() {
  yield takeEvery(coinTypesActions.GET_COINTYPES, getCoinTypes);
}
export function* watchgetCoinBase() {
  yield takeEvery(coinTypesActions.GET_COINBASE, coinsBase);
}

//Root
export const coinTypesSagas = [fork(watchgetCoinTypes), fork(watchgetCoinBase)];

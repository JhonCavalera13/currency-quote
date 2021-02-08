import { Record } from 'immutable';

export const CoinTypes = new Record({
    isPending: false,
    success: null,
    error: null,
    rates: {},
    base: null,
    date: null,
    valuesCoins: null
});
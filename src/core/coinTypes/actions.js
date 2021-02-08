export const coinTypesActions = {

    FETCH_COINTYPES_FAILED: 'FETCH_COINTYPES_FAILED',
    FETCH_COINTYPES_SUCCESS: 'FETCH_COINTYPES_SUCCESS',
    FETCH_COINTYPES_PENDING: 'FETCH_COINTYPES_PENDING',
    GET_COINTYPES: 'GET_COINTYPES',
    GET_COINBASE: 'GET_COINBASE',

    fetchCoinTypesFailed: error => ({
        type: coinTypesActions.FETCH_COINTYPES_FAILED,
        payload: { error }
    }),

    fetchCoinTypesSuccess: (data) => ({
        type: coinTypesActions.FETCH_COINTYPES_SUCCESS,
        payload: {
            data
        }
    }),

    fetchCointTypesPending: () => ({
        type: coinTypesActions.FETCH_COINTYPES_PENDING
    }),

    getCoinTypes: () => ({
        type: coinTypesActions.GET_COINTYPES
    }),

    getCoinsBase: (data) => ({
        type: coinTypesActions.GET_COINBASE,
        payload: {
            data
        }
    })
};


export const coinTypesRequestActions = {
    failed: coinTypesActions.fetchCoinTypesFailed,
    success: coinTypesActions.fetchCoinTypesSuccess,
    pending: coinTypesActions.fetchCointTypesPending
};
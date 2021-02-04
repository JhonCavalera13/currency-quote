import { coinTypesActions } from "./actions";
import { CoinTypes } from "./CoinTypes";

export const coinTypesReducer = (state = new CoinTypes(), { payload, type }) => {
    console.log('types')
    console.log(type)
    switch (type) {
        case coinTypesActions.FETCH_COINTYPES_FAILED:
            return state.merge({
                isPending: false,
                success: false,
                error: true
            });
        case coinTypesActions.FETCH_COINTYPES_SUCCESS:
            // const { data } = payload;
            console.log(payload)
            return state.merge({
                isPending: false,
                success: true
            });
        case coinTypesActions.FETCH_COINTYPES_PENDING:
            return state.set('isPending', true);
        default:
            return state;
    }
}
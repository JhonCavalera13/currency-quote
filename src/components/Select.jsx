import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { coinTypesActions } from "../core/coinTypes/actions";

export const Select = () => {

    const { coinTypes } = useSelector(state => state);
    const dispatch = useDispatch();

    // useEffect(() => {
    // }, [dispatch])
    
    dispatch(coinTypesActions.getCoinTypes())
    console.log(coinTypes && coinTypes.toJS())
    return (
        <div className="select">
            <span>Selecciona la moneda de referenciaaaaaaa</span>
            <select>
                <option>--Select--</option>
                <option>Hello 1</option>
                <option>Hello 2</option>
                <option>Hello 3</option>
                <option>Hello 4</option>
            </select>
            <div className="select_arrow">
            </div>
        </div>
    )
}

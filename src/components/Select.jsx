import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { coinTypesActions } from "../core/coinTypes/actions";

export const Select = ({ handleMoneyChange }) => {
  const { coinTypes } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(coinTypesActions.getCoinTypes());
  }, []);

  return (
    <div>
      <span className="mb-2 title-select text-secondary">
        Selecciona la moneda de referencia
      </span>

      <select
        className="form-select border-0 shadow-sm rounded"
        onChange={handleMoneyChange}
        name="select"
      >
        <option>Moneda</option>
        {Object.keys(coinTypes.rates).map((money, i) => (
          <option key={i} value={money}>
            {money}
          </option>
        ))}
      </select>
    </div>
  );
};

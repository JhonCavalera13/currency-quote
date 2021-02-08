import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { coinTypesActions } from "../core/coinTypes/actions";
import { DatePicker } from "./DatePicker";
import { Select } from "./Select";

export const BoxContent = () => {
  const { coinTypes } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    date: null,
    select: null,
  });

  const handleMoneyChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const sendRequestValues = () => {
    dispatch(coinTypesActions.getCoinsBase(form));
  };

  return (
    <div className="card shadow-lg rounded border border-white">
      <div className="card-body">
        <center className="d-flex justify-content-center my-5">
          <h4>Histrico de cotizaciones</h4>
        </center>
        <Select handleMoneyChange={handleMoneyChange} />
        <DatePicker handleMoneyChange={handleMoneyChange} />
        <button className="btn-currency" onClick={() => sendRequestValues()}>
          Buscar cotizaciones
        </button>
        <ul className="list-group list-group-flush my-5">
          {Object.keys(coinTypes.rates).map((money, i) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={i}
            >
              {money}
              <span>{Object.values(coinTypes.rates)[i]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

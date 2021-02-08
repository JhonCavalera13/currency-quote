export const DatePicker = ({ handleMoneyChange }) => {
  return (
    <div className="mt-4">
      <label htmlFor="date" className="label_picker text-secondary mb-2">
        Ingresa la fecha de cotizacion
      </label>
      <input
        type="date"
        name="date"
        id="date"
        className="input_picker border-0 shadow-sm rounded"
        onChange={handleMoneyChange}
      />
    </div>
  );
};

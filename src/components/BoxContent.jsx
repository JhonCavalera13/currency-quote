import { DatePicker } from "./DatePicker";
import { Select } from "./Select";

export const BoxContent = () => {
    return (
        <div className="box-currency">
            <h1>Histrico de cotizaciones</h1>

            <Select />
            <DatePicker />
            <button className="btn-currency">Buscar cotizaciones</button>
        </div>
    )
}

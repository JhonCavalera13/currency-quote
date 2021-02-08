import axios from "axios";
import { API_BASE_URL } from "../constants";

export const api = {
  getCoins() {
    return dispatch({
      url: `${API_BASE_URL}/latest`,
    });
  },
  getCoinsBase({ date, select }) {
    return dispatch({
      url: `${API_BASE_URL}/${date}?base=${select}`
    });
  },
};

export function dispatch(options) {
  let config = {
    method: options.method || "get",
    url: options.url,
  };

  return axios(config)
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

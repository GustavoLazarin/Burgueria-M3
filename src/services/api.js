import axios from "axios";

export const api = axios.create({
    baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/products",
    timeout: 8 * 1000
})
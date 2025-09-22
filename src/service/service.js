import axios from "axios";

const api = axios.create({
    baseURL: 'https://pensador-api.vercel.app/'
})

export default api;
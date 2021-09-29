import axios from "axios"
import config from "../config"
const baseUrl = config.BASE_URL;

export const getUser = () => {
    return axios.get(`${baseUrl}users/list`)
        .then(response => response.data)
}
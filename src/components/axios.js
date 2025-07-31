import axios from "axios";

const AxiosIn = axios.create({
    baseURL:'https://api64.ipify.org'
})

export default AxiosIn;
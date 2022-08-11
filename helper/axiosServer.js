import axios from "axios";

const axiosApiIntances = axios.create({
    baseURL: 'https://fazzpay.herokuapp.com/'
})

export default axiosApiIntances
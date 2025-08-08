import axios from "axios";

const baseUrl = 'https://api.vedicastroapi.com/v3-json/prediction'

const API_KEY = '246a3c5f-ee37-59db-939a-24eb3bc68db9'


const getDailySun = async (sign, date) => {
    const response = await axios.get(`${baseUrl}/daily-sun?zodiac=${sign}&date=${date}&show_same=true&api_key=${API_KEY}&lang=en&split=true&type=big`)
    const data = await response.data.response
    return data
}

const getWeeklySun = async (sign) => {
    const response = await axios.get(`${baseUrl}/weekly-sun?zodiac=${sign}&week=thisweek&show_same=true&api_key=${API_KEY}&lang=en`)
    const data = await response.data.response
    return data

}

const getYearlySun = async (sign, year) => {
    const response = await axios.get(`${baseUrl}/yearly?year=${year}&zodiac=${sign}&api_key=${API_KEY}&lang=en`)
    const data = await response.data.response
    return data
}

export default { getDailySun, getWeeklySun, getYearlySun }


import axios from "axios";

const baseUrl = 'https://api.vedicastroapi.com/v3-json/prediction'

const API_KEY = '85d783c9-cce2-5862-a6b7-b1874202b442'


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


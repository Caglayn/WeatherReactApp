import axios from "axios";
import * as URL from './RestApiUrls';


export const getHourlyVars = () => {
    return axios.get(URL.WEATHER_SERVICE + URL.GETHOURLYVARS);
}

export const getDailyVars = () => {
    return axios.get(URL.WEATHER_SERVICE + URL.GETDAILYVARS);
}

export const getDailySummary = (lat, lon, date) => {
    return axios.get(URL.WEATHER_SERVICE + URL.GETDAILYSUMMARY, 
        {params: {
            latitude: lat,
            longitude: lon,
            date: date
        }})
}

export const getHourlyDataByParam = (lat, lon, date, param) => {
    return axios.get(URL.WEATHER_SERVICE + URL.GETHOURLYDATABYPARAM, 
        {params: {
            latitude: lat,
            longitude: lon,
            date: date,
            param: param
        }})
}
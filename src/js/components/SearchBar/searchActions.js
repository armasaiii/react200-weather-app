import axios from "axios"

export function getWeather(city) {
    return {
        type: 'GET_WEATHER',
        payload: axios.get(`/search/${city}`)
    }
}

export function updateCityName(city) {
    return {
        type: 'UPDATE_CITY_NAME',
        payload: {city}
    }
}
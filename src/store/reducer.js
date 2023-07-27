import { FETCH_WEATHER, SET_WEATHER_REPORT, SET_SEARCHED_CITIES } from "./config";

const initialState = {
    citiesList: [],
    selectedWeatherReport: {},
    searchCityTerm: ''
}

export const weatherState = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER_REPORT:
            console.log('inreducer')
            return {
                ...state,
                selectedWeatherReport: action.payload
            }
        case SET_SEARCHED_CITIES:
            console.log('SET_SEARCHED_CITIES')
            return {
                ...state,
                citiesList: action.payload
            }
        case FETCH_WEATHER:
            break;
        default:
            break;
    }
}
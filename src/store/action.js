import { SET_WEATHER_REPORT, SET_SEARCHED_CITIES } from "./config";
let token = 'df3505eff7f543efaa973420232707'

export const fetchWeatherReport = (cityName) => {
  return async function (dispatch, getState) {
    //api call
    // let city = getState() && getState().searchCityTerm && getState().searchCityTerm !== '' ? getState()?.searchCityTerm : 'Mumbai'
    let data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${token}&q=${cityName}&days=${4}`).then(res => res.json());
    // let data = {}
    console.log('inaction', getState())
    dispatch({ type: SET_WEATHER_REPORT, payload: data });
  };
};
export const fetchCities = (searchTerm) => {
  return async function (dispatch, getState) {
    //api call
    let token = 'df3505eff7f543efaa973420232707'
    let data = await fetch(`http://api.weatherapi.com/v1/search.json?key=${token}&q=${searchTerm}`).then(res => res.json());
    // let data = {}
    console.log('inaction', getState())
    dispatch({ type: SET_SEARCHED_CITIES, payload: data });
  };
};
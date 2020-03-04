const defaultState = {
  city:'',
  lon:'',
  lat:'',
  temp:'',
  pressure:'',
  humidity:'',
  lowestTemp:'',
  highestTemp:'',
  windSpeed:'',
  information:[]
  }

export default function searchReducer(state = defaultState, action) {
  const { type, payload } = action  
  switch (type) {
    case 'GET_WEATHER_FULFILLED': {
      return {
        ...state,
        city: payload.data.name,
        lon: payload.data.coord.lon,
        lat: payload.data.coord.lat,
        temp: payload.data.main.temp,
        pressure: payload.main.pressure,
        humidity: payload.data.main.humidity,
        lowestTemp: payload.data.main.temp_min,
        highestTemp: payload.data.main.temp_max,
        windSpeed: payload.data.wind.speed,
        information: [
          ...state.information,
          {
            city: payload.data.name
          }
        ]
      }
    }
    
    case 'UPDATE_CITY_NAME': {
      return {
        ...state,
        city: payload.city
      }
    }
    
    default: {
      return state
    }
  }
}
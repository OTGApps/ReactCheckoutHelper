import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer'
import WeatherReducer from './WeatherReducer'
import SettingsReducer from './SettingsReducer'

// glue all the reducers together into 1 root reducer
export default combineReducers({
  login: LoginReducer,
  weather: WeatherReducer,
  settings: SettingsReducer
})

// Put reducer keys that you do NOT want stored to persistence here
export const persistentStoreBlacklist = []

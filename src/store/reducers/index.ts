import counterSlice from '../slices/counterSlice'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
  counter: counterSlice
})

export default rootReducers

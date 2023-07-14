import { combineReducers } from 'redux'

import counterSlice from './counterSlice'
import pokemonSlice from './pokemon'

const rootReducers = combineReducers({
  counter: counterSlice,
  pokemon: pokemonSlice
})

export default rootReducers

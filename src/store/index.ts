import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import rootReducers from './reducers'
import { pokemonApi } from './services/pokemon'

export const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddliware =>
    getDefaultMiddliware()
      .concat(pokemonApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)

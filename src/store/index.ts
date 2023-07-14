/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import promise from 'redux-promise'

import rootReducers from './reducers'
import { pokemonApi } from './services/pokemon'

export const store = configureStore({
  reducer: rootReducers,
  middleware: new MiddlewareArray()
    .concat(thunk, multi, promise, pokemonApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)

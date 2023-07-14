import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

export type PokemonState = {
  pokemons: Array<{
    name: string
    url: string
  }>
}

const initialState: PokemonState = {
  pokemons: []
}

export const pokemon = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    increment: state => {
      return state
    },
    decrement: state => {
      return state
    },
    incrementByAmount: state => {
      return state
    }
  }
})

export const { increment, decrement, incrementByAmount } = pokemon.actions

export const selectCount = (state: RootState) => state?.counter?.value

export default pokemon.reducer

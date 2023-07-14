/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2' }),
  endpoints: builder => ({
    getPokemons: builder.query({
      query: () => ({
        method: 'GET',
        url: 'pokemon?offset=0&limit=100'
      }),
      transformResponse: ({ results }) => {
        console.log('transformResponse:', results)
        return results
      }
    }),
    getPokemonByName: builder.query<any, string>({
      query: name => `pokemon/${ name }`
    })
  })
})

export const {
  useGetPokemonsQuery,
  useGetPokemonByNameQuery
} = pokemonApi

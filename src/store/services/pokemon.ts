/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
  reducerPath: 'pokeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  tagTypes: [],
  endpoints: builder => ({
    getAllPokemons: builder.query<any, any>({
      query: () => ({
        method: 'GET',
        url: 'pokemon?offset=0&limit=100'
      }),
      transformResponse: ({ results }) => results
    }),
    getPokemonByName: builder.query<any, string>({
      query: name => ({
        method: 'GET',
        url: `pokemon/${ name }`
      }),
      transformResponse: results => {
        const { name, types, stats } = results
        const data = {
          name,
          types: types.map(({ type }) => type.name),
          stats: stats.map(({ base_stat, stat }) => ({
            name: stat.name,
            value: base_stat,
          })),
        }

        return data
      }
    }),
  })
})

export const {
  useGetAllPokemonsQuery,
  useGetPokemonByNameQuery,
} = pokemonApi

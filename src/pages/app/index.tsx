/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useEffect, useState } from 'react'

import Header from '../../components/header'
import Search from '../../components/search'

import { useGetPokemonByNameQuery } from '../../store/services/pokemon'

function App() {
  const [search, setSearch] = useState('')

  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  const handleChangePokemon = ({ target }: React.FormEvent<HTMLInputElement>) => {
    setSearch(target.value)
  }

  useEffect(() => {
    console.log('list pokemons => ', data)
  }, [data])

  return (
    <div className="container m-auto">
      <Header />
      <Search value={search} onChange={handleChangePokemon} />

      {error ? (
        <div className="text-5xl text-center font-bold underline">oh no, there was an error</div>
      ) : isLoading ? (
        <div className="text-5xl text-center font-bold underline">Loading...</div>
      ) : data ? (
        <div className="text-5xl text-center font-bold underline text-red-500">'receive data'</div>
      ) : null}
    </div>
  )
}

export default App

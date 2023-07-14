/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useEffect, useState } from 'react'

import Header from '../../components/header'
import Search from '../../components/search'

import { useGetPokemonsQuery } from '../../store/services/pokemon'

function App() {
  const [search, setSearch] = useState('')

  const { data } = useGetPokemonsQuery({})

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
    </div>
  )
}

export default App

/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useState } from 'react'

import Header from '../../components/header'
import Search from '../../components/search'

function App() {
  const [search, setSearch] = useState('')

  const handleChangePokemon = ({ target }: React.FormEvent<HTMLInputElement>) => {
    setSearch(target.value)
  }

  return (
    <div className="container m-auto">
      <Header />
      <Search value={search} onChange={handleChangePokemon} />
    </div>
  )
}

export default App

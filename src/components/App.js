import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useFetch } from '../hooks/useFetch'
import Movies from './Movies'
import Filter from './Filter'
import './App.css'

const App = () => {
  const { data, isLoading, isError } = useFetch(
    'https://api.themoviedb.org/3/movie/popular?api_key=37ec67bb79752dd3d7f5e475aa2c0a05&language=en-US&page=1'
  )

  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState(0)

  if (isLoading)
    return (
      <div className='container'>
        <h1>Loading...</h1>
      </div>
    )
  if (isError) return <h1>Error</h1>

  return (
    <div className='container'>
      <Filter
        movies={data.results}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <div className='movies'>
        <AnimatePresence>
          {filtered.map((value) => {
            return <Movies key={value.id} movies={value} />
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App

import { useEffect } from 'react'

const Filter = ({ movies, setFiltered, activeGenre, setActiveGenre }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(movies)
      return
    }
    const filtered = movies.filter((value) =>
      value.genre_ids.includes(activeGenre)
    )
    setFiltered(filtered)
  }, [activeGenre, setFiltered, movies])
  return (
    <div className='filter-container'>
      <button
        onClick={() => setActiveGenre(0)}
        className={activeGenre === 0 ? 'active' : ''}
      >
        All
      </button>
      <button
        onClick={() => setActiveGenre(16)}
        className={activeGenre === 16 ? 'active' : ''}
      >
        Animation
      </button>
      <button
        onClick={() => setActiveGenre(28)}
        className={activeGenre === 28 ? 'active' : ''}
      >
        Action
      </button>
    </div>
  )
}

export default Filter

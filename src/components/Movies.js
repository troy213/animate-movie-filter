import React from 'react'
import { motion } from 'framer-motion'

const Movies = ({ movies }) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      whileHover={{
        scale: 1.05,
        transition: { ease: 'easeInOut' },
      }}
      layout
      className='card'
    >
      <h2>{movies.title || movies.name}</h2>
      <img
        src={'https://image.tmdb.org/t/p/w500' + movies.backdrop_path}
        alt={movies.name}
      />
    </motion.div>
  )
}

export default Movies

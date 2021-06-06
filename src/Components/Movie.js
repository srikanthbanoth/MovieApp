import React from 'react'
function Movie({title,poster_path,vote_average}) {
    const IMAGE_API = 'https://image.tmdb.org/t/p/w1280'
    return (
        <div className='Movie'>
            <img src={ IMAGE_API + poster_path} alt='movie'/>
            <div className='info'>
            <h3>{title}</h3> 

            <span>{vote_average}</span>
            </div>
        </div>
    )
}

export default Movie

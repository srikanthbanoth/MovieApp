import React, { useState, useEffect } from 'react'
import Movie from './Components/Movie'

function App() {
  const API_DISCOVER = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0f42c7ae131e801f94b9eda6db7c0a65&page=3'
  const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=0f42c7ae131e801f94b9eda6db7c0a65&query='

  const [Movies, setMovie] = useState([])
  const [searchTerm, setTerm] = useState('')

  useEffect(() => {
    fetch(API_DISCOVER)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setMovie(data.results)
      })
  }, [])

  let handleSubmit = (event) => {
    //console.log('1')
    event.preventDefault()
    if(searchTerm===''){
      alert('Enter an Movie Name to Search')
    }
    else{
    // console.log(searchTerm)
    fetch(SEARCH_API+searchTerm)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setMovie(data.results)
      })
    }  
      // setTerm('')
  }
  let handleInput = (e) => {
    setTerm(e.target.value)
  }
  // console.log(Movies)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='search'>
          <input type='text'
            placeholder='Search'
            onChange={handleInput}
          // onClick={moviesearch}
          />
          <input type='submit' />
        </div>
      </form>
      
      <div className="container">
        {
          Movies.map((item) => {
            return <Movie key={item.id} {...item} />
          })
        }
      </div>
      
    </>
  );
  
}

export default App;

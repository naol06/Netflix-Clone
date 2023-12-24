import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Row.css"
const base_url="https://image.tmdb.org/t/p/original";
function Row({title,fetchUrl}) {
    const [movies, setmovies] = useState([]);
    
useEffect(() => {
 axios.get(fetchUrl)
 .then(res=>{
setmovies(res.data.results)
console.log(res.data.results);
 })
 .catch(err=>console.log(err))
}, [fetchUrl]);

  return (
    <div className='row'>
    <h1>{title}</h1>
    <div className='row_posters'>

    {movies?.map((move, i) => {
        return <div key={i}>
      
        <img 
        className='row_poster'
        src={`${base_url}${move.poster_path}`}
        alt={`${move.title}`}
        />
          
          
      </div>    
      })}
    </div>
    </div>
  )
}

export default Row
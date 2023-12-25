import React, { useEffect, useState } from 'react'
import "./Banner.css";
import axios from 'axios';


function Banner() {
    const [movie, setmovie] = useState([]);
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/search/movie?query=Netflix&include_adult=false&api_key=7e4b705a95f358607892cc1d77b0f98c")
        .then(res=>{
        console.log(res.data.results);
setmovie(res.data.results[
    Math.floor(Math.random()*res.data.results.length)
])
        })
        .catch(err=>console.log(err))
    }, []);
    function truncate(str,n){
        return str?.length>n ? str.substr(0,n-1)+"...":str;
    }
  return (
    
   <header className='banner' 
   style={{
    backgroundSize:"cover",
    backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundposition:"center center",
   }}>
   
   <div className="banner_contents">
   <h1 className="banner_title">
   {movie?.title||movie.name||movie.original_name}
   </h1>
   <div className='banner_buttons'>
   <button className='banner_button'>Play</button>
   <button className='banner_button'>My List</button>
   </div>
   <h1 className='banner_description'>{truncate(movie?.overview,150)}</h1>
   </div>
   <div className="bunner_fadeBottom"/>
   
   </header>
  )
}

export default Banner
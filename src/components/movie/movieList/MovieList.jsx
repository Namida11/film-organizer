import React, { useState,useEffect } from 'react'
import Button from '../../search/button/Button';

function MovieList() {
    const [movies, setMovies]= useState([]);

    useEffect(()=>{
        fetch("https://www.omdbapi.com/?s=star&apikey=3c555311")
        .then(res=>res.json())
        .then(data =>{
            setMovies(data.Search)
        })
    },[])

    
  return (
   <>
   <div className='flex justify-between gap-4 w-10/12 mt-6 mx-auto'>
    <div className='flex flex-col gap-4  w-6/12' id='movie-Iteam-Wrapper'>
        {
            movies.map((movie,key)=>(
            <div key={key} className='flex items-center gap-4 bg-[#161a1d] p-4  w-100% rounded-md text-white'>
                <div className='image w-[300px] h-[200px]'>
                    <img src={movie.Poster} alt=""className="w-[100%] h-[100%] bg-cover" />
                </div>
                <div className='description flex flex-col gap-5'>
                    <h2>{movie.Title}</h2>
                    <div className=' flex flex-col gap-4'>
                        <Button name={"Add List"} className={'bg-[#d00000] hover:bg-opacity-75 border-[#d00000]'}/>
                        <Button name={'Details'} className={'border-[#fdc500] hover:bg-[#fdc500]'}/>
                    </div>
                   
                </div>
            </div>
            ))
        }
        
    </div>

    <div id='list' className='bg-white h-[200px] w-[400px]'>
       jsdshd
    </div>
        
   </div>
  
   </>
  )
}

export default MovieList
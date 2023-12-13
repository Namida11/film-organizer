

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function MovieDetails() {
  const selectedMovie = useSelector((state) => state.movies.selectedMovie);

  if (!selectedMovie) {
    return <div>Film bilgileri yükleniyor...</div>;
  }

  
  const title = selectedMovie.Title || 'Melumat yoxdu';
  console.log(selectedMovie)
  
  return (
    <>
      <div className='w-[100%] h-[100vh] bg-[#14213d] flex items-center justify-center'>
       
           <a href={`https://www.imdb.com/title/${selectedMovie.imdbID}`} className='w-[300px] h-[400px] bg-white'>
          <p className='font-bold p-2'>Title: {title}</p>
          <img src={selectedMovie.Poster} alt="img"  className='w-[100%] h-[356px]' />
        </a>
  
      </div>
    </>
  );
}

export default MovieDetails;

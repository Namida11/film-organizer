// Search.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMovies } from '../../../store/moviesSlice';
import Input from '../input/Input';
import Button from '../button/Button';

function Search() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = async (value) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${value.toLowerCase()}&apikey=3c555311`);
      const data = await response.json();
      if (!data.Search || data.Search.length === 0) {
        console.log('Movie not found');
      } else {
        // Filmlerin isimlerini küçük harfe çevirerek dispatch yap
        const movies = data.Search.map((movie) => ({ ...movie, Title: movie.Title.toLowerCase() }));
        dispatch(setMovies(movies));
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleSearchClick = () => {
    handleSearchChange(searchTerm.toLowerCase());
  };

  return (
    <div className='pt-5 w-10/12  flex gap-4 mx-auto '>
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search movie..."
      />
      <Button
        name={"Search"}
        className={' bg-[#000814] text-white hover:bg-[#495057]'}
        onClick={handleSearchClick}
      />
    </div>
  );
}

export default Search;

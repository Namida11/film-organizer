import React from 'react'
import Header from "../../components/header/Header";
import MovieList from "../../components/movie/movieList/MovieList";
import Search from "../../components/search/input/Search";
function Home() {
  return (
    <div className='bg-[#14213d]'>
      <Header />
      <Search />
      <MovieList />
    </div>
  )
}

export default Home
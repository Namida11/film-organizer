import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectMovies, setMovies, addToList, selectSelectedList, selectLists, setSelectedList ,getMovie} from '../../../store/moviesSlice';
import Button from '../../search/button/Button';
import List from '../../favoriList/List';
import { Link } from 'react-router-dom';

function MovieList() {
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();
  const selectedList = useSelector(selectSelectedList);
  const lists = useSelector(selectLists);

  const handleSearch = async () => {
    try {
      const response = await fetch("https://www.omdbapi.com/?s=star&apikey=3c555311");
      const data = await response.json();
      dispatch(setMovies(data.Search));
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  React.useEffect(() => {
    handleSearch();
  }, []);

  const handleAddToList = (movie) => {
   const movieInfo = {
      id: movie.imdbID, 
      title: movie.Title,
      img:movie.Poster
    };
    dispatch(addToList({ listName: selectedList, movie: movieInfo }));
    console.log("clicked");
  };

  const handleGoBasket = () => {

    console.log("Go Basket clicked");
  };
  const handleDetails = (movie) => {
    dispatch(getMovie(movie)); 
  };

  return (
    <>
      <div className='flex justify-between gap-4 w-10/12 mt-6 mx-auto'>
        <div className='flex flex-col gap-4 w-6/12' id='movie-Iteam-Wrapper'>
          {movies.map((movie, key) => (
            <div key={key} className='flex items-center gap-4 bg-[#161a1d] p-4 w-100% rounded-md text-white'>
              <div className='image w-[300px] h-[200px]'>
                <img src={movie.Poster} alt="" className="w-[100%] h-[100%] bg-cover" />
              </div>
              <div className='description flex flex-col gap-5'>
                <h2 className='font-bold text-xl'>{movie.Title}</h2>
                <div className=' flex flex-col gap-4'>
                  <Button name={"Add List"} className={'bg-[#d00000] hover:bg-opacity-75 border-[#d00000]'} onClick={() => handleAddToList(movie)} />
                 <Link to={`/details`}>
                 <Button name={'Details'} className={'border-[#fdc500] hover:bg-[#fdc500]'} onClick={() => handleDetails(movie)}  />
                 </Link> 
                </div>
              </div>
            </div>
          ))}
        </div>
        <List lists={lists} selectedList={selectedList} movies={movies} />
      </div>
    </>
  );
}

export default MovieList;
import List from "./components/favoriList/List";
import Header from "./components/header/Header";
import MovieList from "./components/movie/movieList/MovieList";
import Search from "./components/search/input/Search";
import "./index.css";
function App() {
  return (
    <div className="App bg-[#14213d]">
      <Header />
      <Search />
      <MovieList />
      <List/>
    </div>
  );
}

export default App;

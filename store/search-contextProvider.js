import { useState } from "react";
import SearchContext from "./search-context";

const SearchContextProvider = (props) => {
  const [filterText, setFilterText] = useState("");
  const [filterMovies, setFilterMovies] = useState("");

  const filterMoviesHandler = () => {
    setFilterMovies(filterText);
  };

  const clearFilterMoviesHandler = () => {
    setFilterMovies("");
    setFilterText("");
  };

  const updateSearchTextHandler = (text) => {
    setFilterText(text);
  };

  const searchContext = {
    searchText: filterText,
    filterMovieText: filterMovies,
    updateSearchText: updateSearchTextHandler,
    filterMovies: filterMoviesHandler,
    clearFilterMovies: clearFilterMoviesHandler,
  };

  return (
    <SearchContext.Provider value={searchContext}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;

import React from "react";

const SearchContext = React.createContext({
    searchText : "",
    filterMovieText: "",
    updateSearchText : () => {},
    filterMovies : () => {},
    clearFilterMovies : () => {}
});

export default SearchContext;

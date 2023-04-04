import { useEffect, useState, useContext } from "react";
import { StyleSheet, FlatList } from "react-native";
import Movie from "./Movie";
import SearchContext from "../store/search-context";

import page1 from "../API/CONTENTLISTINGPAGE-PAGE1.json";
import page2 from "../API/CONTENTLISTINGPAGE-PAGE2.json";
import page3 from "../API/CONTENTLISTINGPAGE-PAGE3.json";

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);

  const [pageNumberRequested, setPageNumberRequested] = useState(1);

  const searchCTX = useContext(SearchContext);
  const searchChange = searchCTX.filterMovieText;

  useEffect(() => {
    if (pageNumberRequested > 3) {
      return;
    }

    if (pageNumberRequested == 1) {
      setMoviesList([...page1["page"]["content-items"]["content"]]);
    } else if (pageNumberRequested == 2) {
      setMoviesList([
        ...page1["page"]["content-items"]["content"],
        ...page2["page"]["content-items"]["content"],
      ]);
    } else if (pageNumberRequested == 3) {
      setMoviesList([
        ...page1["page"]["content-items"]["content"],
        ...page2["page"]["content-items"]["content"],
        ...page3["page"]["content-items"]["content"],
      ]);
    }

    if (searchChange !== "") {
      console.log(searchChange);
      setMoviesList((prevMovies) =>
        prevMovies.filter((movie) =>
          movie.name.toUpperCase().includes(searchChange.toUpperCase())
        )
      );
    }
  }, [pageNumberRequested, searchChange]);

  const scrollToEndHandler = () => {
    if (pageNumberRequested === 3) {
      return;
    }
    setPageNumberRequested((prevPage) => prevPage + 1);
  };

  return (
    <FlatList
      data={moviesList}
      renderItem={({ item }) => (
        <Movie title={item.name} imageName={item["poster-image"]} />
      )}
      keyExtractor={(item, index) => item.name + index}
      horizontal={false}
      numColumns={3}
      style={styles.movieList}
      onEndReached={scrollToEndHandler}
      onEndReachedThreshold={0.7}
    />
  );
};

export default Movies;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  movieList: {
    alignContent: "space-between",
  },
});

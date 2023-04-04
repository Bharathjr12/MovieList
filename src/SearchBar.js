import React, { useContext } from "react";
import {
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import SearchContext from "../store/search-context";

export const SearchBar = React.memo(() => {
  const searchCTX = useContext(SearchContext);

  return (
    <View style={styles.searchBarMainView}>
      <View style={styles.buttonsView}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => searchCTX.clearFilterMovies()}
        >
          <Image
            style={styles.utilityImage}
            source={require("../assets/Back.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.searchInput}
          value={searchCTX.searchText}
          onChangeText={(text) => searchCTX.updateSearchText(text)}
        />
      </View>

      <View style={styles.buttonsView}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => searchCTX.filterMovies()}
        >
          <Image
            style={styles.utilityImage}
            source={require("../assets/search.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  searchBarMainView: {
    width: "100%",
    flexDirection: "row",
    minHeight: 50,
  },
  buttonsView: {
    flex: 1,
  },
  inputView: {
    flex: 6,
  },
  backButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  utilityImage: {
    width: 15,
    height: 15,
  },
  searchInput: {
    flex: 1,
    alignItems: "stretch",
    color: "white",
    fontSize: 15,
    borderWidth: 1,
  },
});

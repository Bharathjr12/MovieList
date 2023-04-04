import { Platform, StatusBar, StyleSheet, View } from "react-native";
import Movies from "./src/Movies";
import { SearchBar } from "./src/SearchBar";
import SearchContextProvider from "./store/search-contextProvider";

// let statusBarHeight = StatusBar.currentHeight;

// if (Platform.OS === "ios") {
//   if (statusBarHeight === 20 || statusBarHeight === 0) {
//     statusBarHeight = 44;
//   }
// }

const App = () => {
  return (
    <SearchContextProvider>
      <View style={styles.container}>
        <SearchBar />
        <Movies />
        <StatusBar style="light" />
      </View>
    </SearchContextProvider>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: statusBarHeight,
    // padding:10,
    backgroundColor: "black",
  },
});

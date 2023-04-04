import { Text, View, StyleSheet, Image } from "react-native";
import { imagePath } from "../assets/imagePath";

const Movie = ({ title, imageName }) => {
  return (
    <View style={styles.imgMainView}>
      <Image style={styles.movieImage} source={imagePath[imageName]} alt="" />
      <Text style={styles.movieTitle}>{title}</Text>
    </View>
  );
};

export default Movie;

const styles = StyleSheet.create({
  imgMainView: {
    // flex: 1,
    width: "33%",
    padding: 5,
  },
  movieImage: {
    width: "100%",
    height: 210,
  },
  movieTitle: {
    fontSize: 15,
    color: "white",
  },
});

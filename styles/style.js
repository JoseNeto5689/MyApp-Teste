import { StyleSheet } from "react-native";

export default StyleSheet.create({
    textBase: {
        color: "red",
    },
    container: {
        height: "100%",
        backgroundColor: "gray",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
      },
      container1: {
        width: 100,
        height: 100,
        backgroundColor: "red",
        margin: 5,
        borderColor: "black",
        borderWidth: 3,
      },
      container2: {
        width: 100,
        height: 100,
        backgroundColor: "blue",
        margin: 5,
        borderColor: "black",
        borderWidth: 3,
      },
      container3: {
        width: 100,
        height: 100,
        backgroundColor: "green",
        margin: 5,
        borderColor: "black",
        borderWidth: 3,
      },
      container4: {
        width: 100,
        height: 100,
        backgroundColor: "yellow",
        margin: 5,
        borderColor: "black",
        borderWidth: 3,
      },
      image: {
        width: 800,
        height: 800,   
        resizeMode: "repeat"
      }
}) 
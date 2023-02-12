import { StyleSheet } from "react-native";
import { Colors } from "./stylesGlobal";

const styleCards = StyleSheet.create({
  textloading: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  header: {
    height: "10%",
    backgroundColor: Colors.secondaryblue,
    justifyContent: "center",
    alignItems: "center",
  },
  containerHeader: { height: "15%" },
  containerBody: {
    height: "50%",
  },
  containerImages: {
    height: "35%",
    justifyContent: "center",
    alignItems: "center",
  },
  subcontainerimages: {
    width: 200,
    height: 200,
    resizeMode: "stretch",
  },
  images: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  footer: {
    height: "15%",
    paddingLeft: "20%",
    paddingRight: "20%",
    justifyContent: "center",
  },
});

export { styleCards };

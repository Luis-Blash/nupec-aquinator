import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "./stylesGlobal";

const { height } = Dimensions.get("window");

const styleSelectQuestion = StyleSheet.create({
  imgback: { flex: 1 },
  containerheader: {
    backgroundColor: Colors.secondaryblue,
    height: "15%",
    justifyContent: "space-evenly",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textHeader: {
    fontSize: 20,
    color: "white",
  },
  body: {
    height: "55%",
  },
  imageBody: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  question: {
    height: "30%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "flex-end",
  },
});

export { styleSelectQuestion };

import { StyleSheet } from "react-native";
import { Colors, colorsGlobal } from "../../theme/stylesGlobal";

const styleButtons = StyleSheet.create({
  button1: {
    ...colorsGlobal.backprimaryblue,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 48,
    paddingRight: 48,
    borderRadius: 12,
  },
  button1Text: {
    color: "white",
    fontWeight: "500",
    textAlign: "center",
  },
  imgArrow: {
    width: "100%",
    height: "100%",
    resizeMode: 'stretch'
  },
  containerIcon: {
    width: 15,
    height: 20
  },
  containerCircule: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    padding: 10,
    borderRadius: 25,
  }
,});

export { styleButtons };

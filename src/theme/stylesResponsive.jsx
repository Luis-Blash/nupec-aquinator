import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "./stylesGlobal";

const { height } = Dimensions.get("window");

let fontSizeWelcome = 35;
let fontSizeWelcomeSub = 15;
let paddinsXSelectPets = 80;
let paddinBottonQuestion = height < 700 ? 20 : 30;
let imagesContainerQuestion = height < 700 ? 150 : 200;
let paddingYcontainerButtons = height < 700 ? 6 : 12;
let fontSizeContainerQuestion = 12;
let paddinXRequest = 70;
let fontSizePoints = 16;
// height < 700 ? 20 : 50
//* 700 mini
//* 800 normal
//* 900 grande
if (height >= 700 && height <= 900) {
  fontSizeWelcome = 40;
  fontSizeWelcomeSub = 20;
  fontSizeContainerQuestion = 18;
} else if (height >= 901) {
  fontSizeWelcome = 47;
  fontSizeWelcomeSub = 30;
  paddinsXSelectPets = 200;
  fontSizeContainerQuestion = 18;
  paddinXRequest = 200;
  fontSizePoints = 20;
}

const styleResponsive = StyleSheet.create({
  textH1Welcome: {
    color: "white",
    fontSize: fontSizeWelcome,
  },
  textH2Welcome: {
    fontSize: fontSizeWelcomeSub,
    color: "white",
    fontWeight: "300",
    textAlign: "center",
  },
  selectPetContainer: {
    flex: 2,
    paddingTop: 60,
    paddingLeft: paddinsXSelectPets,
    paddingRight: paddinsXSelectPets,
  },
  textBodyQuestion: {
    color: "#0085CA",
    fontSize: height < 700 ? 18 : 25,
    textAlign: "center",
  },
  containerImageQuestion: {
    height: imagesContainerQuestion,
    width: imagesContainerQuestion,
  },
  containerSelectQuestion: {
    backgroundColor: Colors.secondaryblue,
    paddingTop: 20,
    paddingBottom: paddinBottonQuestion,
    paddingLeft: "20%",
    paddingRight: "20%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  containerButtonsQuestion: {
    marginBottom: 12,
    paddingTop: paddingYcontainerButtons,
    paddingBottom: paddingYcontainerButtons,
  },
  containerNextButtonQuestion: {
    paddingTop: paddingYcontainerButtons,
    paddingBottom: paddingYcontainerButtons,
  },
  textFonsizeContiainerQuestion: { fontSize: fontSizeContainerQuestion },
  backgroundRequest: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: paddinXRequest,
    paddingRight: paddinXRequest,
  },
  fontSizeListPoints: { fontSize: fontSizePoints, fontWeight: "300" }
});

export { styleResponsive };

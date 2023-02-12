import { ImageBackground, Text, View } from "react-native";
import { ButonPrimary } from "../components/Buttons/ButonPrimary";
import { pathRoute } from "../navigator";
import { styleWelcome } from "../theme/stylesGlobal";
import { version } from "../../package.json";
import { styleResponsive } from "../theme/stylesResponsive";

export const ScreenWelcome = ({ navigation }) => {
  const goNavigate = () => {
    navigation.navigate(pathRoute.screenSelectPets);
    // navigation.navigate(pathRoute.screenViewModel, {
    //   typeModel: 1,
    //   map: "",
    // });
  };
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/backgrounds/welcome.png")}
        resizeMode="cover"
        style={{ ...styleWelcome.backgroundImages }}
      >
        <View style={{ ...styleWelcome.container }}>
          <Text style={{ ...styleResponsive.textH1Welcome, marginBottom: 10 }}>
            ¡Bienvenidos!
          </Text>
          <Text style={{ ...styleResponsive.textH1Welcome, marginBottom: 10 }}>
            NUPEC
          </Text>
          <Text style={{ ...styleResponsive.textH2Welcome, marginBottom: 20 }}>
            Estas listo para conocer mas acerca de nuestros productos y conocer
            lo que mas favorece a tu mascota.
          </Text>
          <ButonPrimary action={goNavigate}>Comenzar</ButonPrimary>
        </View>
      </ImageBackground>
      <View style={{ position: "absolute", zIndex: 1, bottom: 10, left: 10 }}>
        <Text style={{ color: "white" }}>V-{version}</Text>
      </View>
    </View>
  );
};

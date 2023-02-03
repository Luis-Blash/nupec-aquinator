import { Button, Text, View } from 'react-native'
import { pathRoute } from '../navigator';

export const ScreenRequest = ({ navigation }) => {
  const goNavigate = () => {
    navigation.navigate(pathRoute.screenHome);
  };
  return (
    <View>
      <Text>ScreenRequest</Text>
      <Button title="Home" onPress={goNavigate} />
    </View>
  )
}

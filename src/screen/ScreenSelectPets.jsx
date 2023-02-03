import { Button, Text, View } from 'react-native'
import { pathRoute } from '../navigator';

export const ScreenSelectPets = ({ navigation }) => {
  const goNavigate = () => {
    navigation.navigate(pathRoute.screenRequest);
  };
  return (
    <View>
      <Text>ScreenSelectPets</Text>
      <Button title="Request" onPress={goNavigate} />
    </View>
  )
}

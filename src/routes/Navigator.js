import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Breweries from "../screens/Breweries"


const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions = {{
        headerStyle: {
          backgroundColor: '#bd5d38'
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Breweries' component={Breweries} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator
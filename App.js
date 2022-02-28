import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, ActivityIndicator, ImageBackground } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const URL = 'https://api.openbrewerydb.org/breweries?by_city=fort_collins';
const Stack = createNativeStackNavigator();
const image= { uri: 'https://images.unsplash.com/photo-1584225065152-4a1454aa3d4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'}

function HomeScreen() {
  
  return (
  <View style={styles.container}>
    <ImageBackground source={image} style={{width: '100%', height: '100%'}}
  ></ImageBackground>
  </View>)
}

function Main() {

    const [isLoading, setIsLoading] = useState(true)
    const [breweries, setBreweries] = useState([])

    const getBreweries = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setBreweries(data);
      setIsLoading(false)
      
      return (
      <SafeAreaView style={styles.container}>
        {isLoading ? <ActivityIndicator /> :
          <>
            { }
            <FlatList
              showsVerticalScrollIndicator={false}
              data={breweries}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Text style={styles.item}>
                  {item.name} {'\n'} {item.street}
                </Text>
              )}
            />
          </>
        }
        <StatusBar style="auto" />
      </SafeAreaView>
    )
    }

    useEffect(() => getBreweries(), [])
}
 export default function App() {
    
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  item: {
    backgroundColor: '#a0c5e8',
    borderRadius: 7,
    margin: 10,
    padding: 30,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  image: {
    flex:1,
    justifyContent:'center',
    resizeMode: 'cover'
  }
});

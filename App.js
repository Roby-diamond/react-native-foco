import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const URL = 'https://api.openbrewerydb.org/breweries?by_city=fort_collins';

export default function App() {
  const [breweries, setBreweries] = useState([])

  const getBreweries = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setBreweries(data);
  }

  useEffect(() => getBreweries(), [])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <FlatList
          data={breweries}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.name}</Text>
            )}
            />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

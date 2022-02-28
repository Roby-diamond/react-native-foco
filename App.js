import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';

const URL = 'https://api.openbrewerydb.org/breweries?by_city=fort_collins';

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [breweries, setBreweries] = useState([])

  const getBreweries = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setBreweries(data);
    setIsLoading(false)
  }

  useEffect(() => getBreweries(), [])

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator /> :
        <FlatList
          data={breweries}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.name}</Text>
          )}
        />
      }
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    margin:10,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    justifyContent: 'center',
    textAlign: 'center'
  }
});

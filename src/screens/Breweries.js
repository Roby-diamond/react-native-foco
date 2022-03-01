import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from "react-native";

const Breweries = () => {

  const URL = 'https://api.openbrewerydb.org/breweries?by_city=fort_collins';
  const [isLoading, setIsLoading] = useState(true)
  const [breweries, setBreweries] = useState([])

  const getBreweries = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setBreweries(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false)
    }
  }
    useEffect(() => getBreweries(), []);

    return (
      <View style={styles.container}>
        {isLoading ? <ActivityIndicator /> :
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
        }
        <StatusBar style="auto" />
      </View>
    )
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

})

export default Breweries
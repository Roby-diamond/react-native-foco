import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, FlatList, Text, View, StyleSheet, Linking, TouchableOpacity } from "react-native";

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
              <TouchableOpacity
              onPress={ ()=>{ Linking.openURL(`${item.website_url}`)}}>
              <Text style={styles.item}>
                {item.name} {'\n'} {item.street}
              </Text>
              </TouchableOpacity>
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
    backgroundColor: '#bd5d38',
    borderWidth: 2,
    borderRadius: 7,
    color: 'white',
    fontSize: 18,
    margin: 12,
    padding: 30,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

})

export default Breweries
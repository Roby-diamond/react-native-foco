import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import styles from "../styles"

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

export default Breweries
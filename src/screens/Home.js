import { View, ImageBackground, Text, Pressable, StyleSheet } from "react-native";

function Home({ navigation }) {
  const image = { uri: "https://images.unsplash.com/photo-1626332714432-acccedc3691e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"}
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={image} style={{flex: 1, justifyContent: 'center'}}>
          <Text style={styles.homeText}>Find Your Next Favorite Brewery</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Breweries')}>
          <Text style = {styles.buttonText}>Click Here</Text>
        </Pressable>
      </ImageBackground>
    </View>)
}

const styles = StyleSheet.create({
  homeText: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
},

button: {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: "#000000c0",
},

buttonText: {
  color: 'white',
  fontSize: 24,
}
});

export default Home;

import { View, ImageBackground, Text, Button } from "react-native";
import styles from "../styles"

function Home({navigation}) {
    const image= { uri: 'https://images.unsplash.com/photo-1584225065152-4a1454aa3d4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'}
    return (
    <View style={styles.container}>
      <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
      <Text>Find your next favorite brewery</Text>
      <Button
      title="here"
      onPress={() => navigation.navigate('Breweries')}
      />
    </ImageBackground>
    </View>)
  }

export default Home;
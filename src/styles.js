import { StyleSheet } from "react-native-web";

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
      resizeMode: 'cover',
    },

    homeText: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      paddingTop: 30
    },

    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },

    buttonText: {
      color: 'white'
    }
  });

export default styles
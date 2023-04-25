import {
    Text,
    View,
    StyleSheet,
  } from "react-native";
  import { Ionicons } from "@expo/vector-icons";

const IconNumber=()=>{
    return (
        <View style={styles.container}>
        <Ionicons name={"cart-outline"} size={20} color="black" />
        {1 > 0 && ( 
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>8</Text> 
          </View>
        )}
      </View>
    )
}
const styles=StyleSheet.create({
    container: {
        position: 'relative', // Set the position of the container to relative
      },
      numberContainer: {
        position: 'absolute', // Set the position of the number container to absolute
        top: -7, // Set the top position to -10 (or any desired value)
        right: -7, // Set the right position to -10 (or any desired value)
        backgroundColor: 'red', // Set the background color of the number container
        borderRadius: 10, // Set the border radius of the number container to make it circular
        justifyContent: 'center', // Align the number text vertically
        alignItems: 'center', // Align the number text horizontally
        minWidth: 17, // Set the minimum width of the number container to 20 (or any desired value)
        height: 17, // Set the height of the number container to 20 (or any desired value)
      },
      numberText: {
        color: 'white', // Set the color of the number text
        fontSize: 12, // Set the font size of the number text
      },
})
export default IconNumber
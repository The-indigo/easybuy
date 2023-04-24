import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../util/Colors";



const ProfileInfoText = ({iconName, infoText}) => {
    return(
         <View style={style.informationContainer}>
            <Ionicons name={ iconName} />
            <Text style={style.informationText}>{ infoText}</Text>
                  
        </View>
    )
}

const style = StyleSheet.create({
      informationContainer: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.button100,
      marginHorizontal: 10,
        flexDirection: 'row',
      marginVertical:15
    
    },
    informationText: {
      marginHorizontal:20
  },
})
export default ProfileInfoText;
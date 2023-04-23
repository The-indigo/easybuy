import { StyleSheet, View } from "react-native"
import Colors from "../util/Colors";

const Hr=()=>{
    return(
        <View style={styles.hr}>

        </View>
    )
}
const styles= StyleSheet.create({
    hr:{
        borderWidth:0.3,
        borderColor:Colors.BorderColor,
        marginTop:10
      },
})
export default Hr;
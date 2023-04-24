import { StyleSheet, View } from "react-native"
import Colors from "../util/Colors";

const Hr=({margin})=>{
    return(
        <View style={[styles.hr,{
            marginTop:margin?margin:10
        }]}>

        </View>
    )
}
const styles= StyleSheet.create({
    hr:{
        borderWidth:0.3,
        borderColor:Colors.BorderColor,
    
      },
})
export default Hr;
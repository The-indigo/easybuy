import {
    StyleSheet,
    View,
    TouchableOpacity,
  } from "react-native";
const ColorPicker=({onPress,color})=>{
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={[styles.colorPicker,{
            backgroundColor:color
        }]}>

        </View>            
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    colorPicker:{
        borderRadius:5,
        height:30,
        width:55
      }
})
export default ColorPicker
import {
    Text,
    View,
    StyleSheet,
    Pressable,
    TouchableOpacity
  } from "react-native";
  import Colors from "../util/Colors";

const Button=({text,color,padding,wishlist,onPress})=>{
    return (
        <TouchableOpacity onPress={onPress} style={{
         width:wishlist&&'40%'
        }}>
        <View style={[styles.addToCartButton,{
             backgroundColor: color?color:Colors.PrimaryColor,
             paddingVertical:padding?padding:9,
        }]}>
            <Text style={styles.addToCartText}>{text?text:'Add to cart'}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles= StyleSheet.create({
    addToCartButton:{
        marginTop:10,        
        borderRadius:4
      },
      addToCartText:{
        textAlign:'center',
        color:'white'
      }
})
export default Button;
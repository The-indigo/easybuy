import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    Pressable,
    TouchableOpacity
  } from "react-native";
  import Colors from "../util/Colors";
import Button from "./Button";
import { Ionicons } from "@expo/vector-icons";


  const width = (Dimensions.get('window').width - 4 * 10) / 2;

const ProductItem=({source,name,price,setWidth,wishlist})=>{
    return (
        <View style={[styles.productItemView,{
          width:setWidth?setWidth:width,
        }]}>
        <View style={styles.imageView}>
            <Image source={source} style={styles.productImage}/>
        </View>
        <View style={styles.productDetailsView}>
         
        <Text>{name}</Text>
        <Text style={styles.prodcutPrice} >{`$${price}`}</Text>
        {wishlist?
        <View style={styles.buttonsView}>
<Button wishlist/>
<TouchableOpacity>
  <View style={styles.iconView}>
  <Ionicons name="trash-outline" size={20}/>
  </View>
</TouchableOpacity>
</View>:<Button/>
}


        </View>

        
    </View>
    )
}
const styles= StyleSheet.create({
    productItemView:{
        marginBottom:20,
        borderRadius:10,
        elevation: 3,
        shadowOpacity:0.15,
        backgroundColor:Colors.ProductBackgroundColor
      },
      imageView:{
        paddingBottom:10
      },
      productImage:{
        height: 120,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        width:"100%"
      },
      productDetailsView:{
        marginTop:10,
        paddingHorizontal:15,
        paddingBottom:15
      },
      prodcutPrice:{
        marginTop:10,
        fontWeight:'bold',
        fontSize:16
      },
      buttonsView:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        // borderWidth:2
      },
      iconView:{
        borderWidth:2,
        padding:1,
        borderColor:Colors.Grey,
        borderRadius:20
      }

})


export default ProductItem
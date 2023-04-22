import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    Pressable
  } from "react-native";
  import Colors from "../util/Colors";

  const width = (Dimensions.get('window').width - 4 * 10) / 2;

const ProductItem=({source,name,price})=>{
    return (
        <View style={styles.productItemView}>
        <View style={styles.imageView}>
            <Image source={source} style={styles.productImage}/>
        </View>
        <View style={styles.productDetailsView}>
         
        <Text>{name}</Text>
        <Text style={styles.prodcutPrice} >{`$${price}`}</Text>

        <Pressable onPress={()=>{console.log('');}}>
        <View style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>Add to cart</Text>
            </View>
        </Pressable>

        </View>

        
    </View>
    )
}
const styles= StyleSheet.create({
    productItemView:{
        width:width,
        marginBottom:20,
        borderRadius:8,
        elevation: 3,
        shadowOpacity:0.15,
        backgroundColor:'#EDF7FF'
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
      addToCartButton:{
        backgroundColor:Colors.PrimaryColor,
        paddingVertical:8,
        marginTop:10,
        borderRadius:4
      },
      addToCartText:{
        textAlign:'center',
        color:'white'
      }
})


export default ProductItem
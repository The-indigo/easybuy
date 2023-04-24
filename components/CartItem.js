import {Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../util/Colors";
import { Ionicons } from "@expo/vector-icons";

const CartItem=({name,image,price,addQuantity,removeQuantuty,deleteItem})=>{
return (
    <View style={styles.cartItemView}>
    <View style={styles.imageView}>
      <Image style={styles.image} source={image} />
    </View>

    <View style={styles.quantityRoot}>
      <View>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.priceText1}>{price}</Text>
      </View>

      <View style={styles.quantityView}>
        <Text style={styles.priceText}>$199,99</Text>
        <TouchableOpacity onPress={addQuantity}>
        <View style={styles.iconView}>
          <Ionicons name="add" size={20} />
        </View>
        </TouchableOpacity>
        <Text>1</Text>

      <TouchableOpacity onPress={removeQuantuty}>
      <View style={styles.iconView}>
          <Ionicons name="remove" size={20} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={deleteItem}>
      <View style={styles.iconView}>
          <Ionicons name="trash-outline" size={20} />
        </View>    
      </TouchableOpacity>

      </View>
    </View>
  </View>
)
}
const styles = StyleSheet.create({
    cartItemView: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: "white",
        shadowOffst: { width: 2, height: 1 },
        shadowOpacity: 0.1,
        shadowColor: "black",
        elevation: 3,
      },
      imageView: {
        width: "35%",
      },
      image: {
        height: 100,
        width: "100%",
      },
      quantityRoot: {
        flex: 1,
        paddingVertical: 4,
        paddingHorizontal:7,
        justifyContent: "space-between",
      },
      nameText: {
        fontSize: 16,
        fontFamily: "Inter_600SemiBold",
        marginBottom: 5,
      },
      priceText1: {
        fontFamily: "Inter_400Regular",
        color: Colors.DarkGrey,
        fontSize: 16,
      },
      quantityView: {
        flexDirection: "row",
        flexWrap:'wrap',
        justifyContent: "space-between",
        alignItems: "center",
      },
      priceText: {
        fontSize: 17,
        fontFamily: "Inter_500Medium",
      },
      iconView:{
        borderWidth:2,
        padding:1,
        borderColor:Colors.Grey,
        borderRadius:20
      }
})
export default CartItem
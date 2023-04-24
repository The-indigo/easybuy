import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Hr from "../components/Hr";
import { useLayoutEffect } from "react";
import CartItem from "../components/CartItem";
import Products from "../data/Products";
import Button from "../components/Button";
import Colors from "../util/Colors";

const CartScreen = ({ route, navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
            <Pressable onPress={()=>{console.log('cart');}}>
          <View
            style={{
              paddingHorizontal: 15,
            }}
          >
            <Ionicons name={"cart-outline"} size={23} />
          </View>
          </Pressable>
        );
      },
    });
  }, []);
  return (
    <View style={styles.root}>
      <Hr margin={1} />
      <View style={styles.flex}>
        <FlatList
        data={Products}
        keyExtractor={(item)=>item.id}
        showsVerticalScrollIndicator={false}
        renderItem={(itemData)=>{
            return (
        <CartItem name={itemData.item.name} image={itemData.item.image}
        price={itemData.item.price}
        />          
            )
        }}
        />
        <View style={styles.totalView}>
            <View style={styles.totalTextView}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.totalText}>$ 12000</Text>
            </View>
            <Button color={Colors.DarkGrey} text={'Continue to payments'} padding={12}/>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    
  },
  flex: {
    flex: 1,
    paddingHorizontal: 10,
  },
  totalView:{
    padding:15
  },
  totalTextView:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  totalText:{
    fontFamily:'Inter_400Regular',
    fontSize:17
  }
});
export default CartScreen;

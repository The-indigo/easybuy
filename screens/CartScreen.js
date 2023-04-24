import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Hr from "../components/Hr";
import { useLayoutEffect } from "react";
import CartItem from "../components/CartItem";
import Products from "../data/Products";

const CartScreen = ({ route, navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View
            style={{
              paddingHorizontal: 15,
            }}
          >
            <Ionicons name={"cart-outline"} size={23} />
          </View>
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
});
export default CartScreen;

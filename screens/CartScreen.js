import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import Hr from "../components/Hr";
import { useLayoutEffect } from "react";
import CartItem from "../components/CartItem";
import Button from "../components/Button";
import IconNumber from "../components/IconNumber";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, total } from "../store/cartReducer";

const CartScreen = ({ route, navigation }) => {
  const cart=useSelector(state=>state.cart)
  const dispatch=useDispatch()

  const handleDeleteItem=(id)=>{
    dispatch( deleteItem(id))
  }
  //handle the total value from the cart store
const handleTotal=()=>{
  let total=0;
  total=cart.reduce((a,b)=>a+((b.price)*(b.quantity)),0)
  return total;
}

// const handleItemTotal=(id)=>{
//   let total=0;
//   total=
// }
//variable holds the result of the total value
//the app reloads when there is a state change 
//and updates the screen
let totalValue=handleTotal()

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
           <IconNumber cartLength={cart.length}/>
          </View>
          </Pressable>
        );
      },
    });
  }, []);
  return (
    <View style={styles.root}>
      <Hr margin={1} />
           {cart.length===0?
           <View style={[styles.flex,{
            justifyContent:'center',
            alignItems:'center'
           }]}> 
           <Text>You have no item in your cart</Text> 
           </View>
           :
      <View style={[styles.flex]}>
   
        <FlatList
        data={cart}
        keyExtractor={(item)=>item.id}
        showsVerticalScrollIndicator={false}
        renderItem={(itemData)=>{
            return (
        <CartItem name={itemData.item.name} image={{
          uri:itemData.item.image}}
          quantity={itemData.item.quantity}
        price={itemData.item.price}
        itemTotal={itemData.item.price*itemData.item.quantity}
        deleteItem={()=>handleDeleteItem(itemData.item.id)}
        />          
            )
        }}
        />
      
        <View style={styles.totalView}>
            <View style={styles.totalTextView}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.totalText}>${totalValue}</Text>
            </View>
            <Button text={'Continue to payments'} padding={12}/>
        </View>
       
      </View>
 }
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

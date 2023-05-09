import { Text, StyleSheet,Pressable, View,    Dimensions, FlatList,
} from "react-native"
import ProductItem from "../components/ProductItem";
import { useLayoutEffect } from "react";
import IconNumber from "../components/IconNumber";
import { useSelector } from "react-redux";

const width = (Dimensions.get('window').width) ;

const WishlistScreen=({route,navigation})=>{
  const wishlist=useSelector(state=>state.wishlist)
    useLayoutEffect (() => {
        navigation.setOptions({
          headerRight: () => {
            return (
                <Pressable onPress={()=>{console.log('cart');}}>
              <View
                style={{
                  paddingHorizontal: 15,
                }}
              >
               <IconNumber/>
              </View>
              </Pressable>
            );
          },
        });
      }, []);
    return (
        <View style={styles.root}>

{wishlist.length===0?
           <View style={[styles.flex,{
            justifyContent:'center',
            alignItems:'center'
           }]}> 
           <Text>You have no item in your wishlist</Text> 
           </View>
           :
            <View style={styles.flex}>
             
        <FlatList
        data={wishlist}
        keyExtractor={(item)=>item.id}
        showsVerticalScrollIndicator={false}
        renderItem={(itemData)=>{
            return (
              <ProductItem 
              // onPress={()=>handleNavigate(itemData.item.id)}
              // addToCart={()=> handleAddToCart(itemData.item) }
             //  source={itemData.item.image}
              source={{
               uri: itemData.item.image,
             }}
               name={itemData.item.name} price={itemData.item.price}/>        
            )
        }}
        />
                   

                </View>
}
        </View>
    )
}
const styles= StyleSheet.create({
    root:{
        flex:1
    },
    flex:{
        flex:1
    },

})
export default WishlistScreen;
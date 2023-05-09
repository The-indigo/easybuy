import { Text, StyleSheet,Pressable, View,    Dimensions, FlatList,
} from "react-native"
import ProductItem from "../components/ProductItem";
import { useLayoutEffect } from "react";
import IconNumber from "../components/IconNumber";
import { useDispatch, useSelector } from "react-redux";
import { addWishlistToCart, deleteItem } from "../store/wishlistReducer";
import { addItem } from "../store/cartReducer";

const width = (Dimensions.get('window').width) ;

const WishlistScreen=({route,navigation})=>{
  const wishlist=useSelector(state=>state.wishlist)
  const dispatch=useDispatch()
    useLayoutEffect (() => {
        navigation.setOptions({
          headerRight: () => {
            return (
              <View
                style={{
                  paddingHorizontal: 15,
                }}
              >
               <IconNumber/>
              </View>
            );
          },
        });
      }, []);
  
      const handleDeleteWishlist=(id)=>{
        dispatch(deleteItem(id))
      }
      const handleAddToCartFromWishlist=(data,id)=>{
        dispatch(deleteItem(id))
        dispatch(addItem(data))
      }
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
              wishlist
              setWidth={width}
              deleteWishlist={()=>handleDeleteWishlist(itemData.item.id)}
              addToCartFromWishlist={()=>handleAddToCartFromWishlist(itemData.item,itemData.item.id)}
              // onPress={()=>handleNavigate(itemData.item.id)}
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
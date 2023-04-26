import { ScrollView, StyleSheet,Pressable, View,    Dimensions,
} from "react-native"
import ProductItem from "../components/ProductItem";
import { useLayoutEffect } from "react";
import IconNumber from "../components/IconNumber";

const width = (Dimensions.get('window').width) ;

const WishlistScreen=({route,navigation})=>{

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
            <View style={styles.flex}>
                <ScrollView>
                    <ProductItem name={'Airpods'} source={require('../assets/airpods.png')} price={2000}
                    setWidth={width} wishlist
                    />
                           <ProductItem name={'Airpods'} source={require('../assets/maxpods.png')} price={2000}
                    setWidth={width} wishlist
                    />
                                        <ProductItem name={'Airpods'} source={require('../assets/airpods.png')} price={2000}
                    setWidth={width} wishlist
                    />
                                        <ProductItem name={'Airpods'} source={require('../assets/airpods.png')} price={2000}
                    setWidth={width} wishlist
                    />

                </ScrollView>
                </View>
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
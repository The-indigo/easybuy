import { ScrollView, StyleSheet, Text, View,    Dimensions,
} from "react-native"
import ProductItem from "../components/ProductItem";

const width = (Dimensions.get('window').width) ;

const WishlistScreen=()=>{
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
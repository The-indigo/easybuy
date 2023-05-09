import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,

} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../util/Colors";
import CategoryItem from "../components/CategoryItem";
import ProductItem from "../components/ProductItem";
import IconNumber from "../components/IconNumber";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/cartReducer";

const HomeScreen = () => {
  const products=useSelector(state=>state.product)
  const dispatch=useDispatch()
  const navigation=useNavigation()
  const user=useSelector(state=>state.auth.user)
  const handleNavigate=(id)=>{
    navigation.navigate('Details', 
    {
      productId:id
  
  })
}
const handleAddToCart=(item)=>{
  dispatch(addItem(item))
}
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.rootView}>
        <View style={styles.details}>
          <View style={styles.deliveryAddressView}>
            <Text style={styles.deliveryText}>Delivery Address</Text>
            <Text style={styles.deliveryAddress}>
              {user.address}
            </Text>
          </View>
          <View style={styles.detailsIconView}>
            <IconNumber/>           
            <Ionicons name={"notifications-outline"} size={18} />
          </View>
        </View>

        <View style={styles.textInputView}>
          <Ionicons name="search-outline" size={18} />
          <TextInput style={styles.textInput} placeholder="Search Here ..." />
        </View>

        <View>
          <ScrollView horizontal={true}>
            <View style={styles.bannerView}>
              <View>
                <Text></Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <View>
          <Text style={styles.categoryText}>Category</Text>
          <View>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{
                flexDirection: "row",
                justifyContent: "space-between",
                flexGrow: 1,
              }}
              style={{ flexGrow: 0 }}
            >
              <CategoryItem
                backgroundColor={"#EDF7FF"}
                image={require("../assets/apparel.png")}
              />
              <CategoryItem
                backgroundColor={"#ECFCFF"}
                image={require("../assets/school.png")}
              />
              <CategoryItem
                backgroundColor={"#FFEDDD"}
                image={require("../assets/sports.png")}
              />
              <CategoryItem
                backgroundColor={"#FFEDDD"}
                image={require("../assets/electronics.png")}
              />
              <CategoryItem
                backgroundColor={"#E9FFF8"}
                image={require("../assets/all.png")}
              />
            </ScrollView>
          </View>
        </View>
        <View  style={styles.flex}>
            <View>
            <Text>Recent Product</Text>
            </View>
            <FlatList
            style={styles.flatlistView}
            columnWrapperStyle={{
                justifyContent: 'space-between'
            }}
            numColumns={2}
            data={products}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item)=>item.id}
            renderItem={(itemData)=>{
                return (
               <ProductItem 
               onPress={()=>handleNavigate(itemData.item.id)}
               addToCart={()=> handleAddToCart(itemData.item) }
              //  source={itemData.item.image}
               source={{
                uri: itemData.item.image,
              }}
                name={itemData.item.name} price={itemData.item.price}/>
                )
            }}
            />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    flatlistView:{
        flex:1,
        marginTop:15,
    },
  flex: {
    flex: 1,
  },
  rootView: {
    flex: 1,
    padding: 15,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  detailsIconView: {
    flexDirection: "row",
    gap: 20,
  },
  deliveryText: {
    color: "#C8C8CB",
    fontSize: 15,
  },
  deliveryAddress: {
    color: Colors.HeadingColor,
    fontWeight: "500",
  },
  textInputView: {
    marginTop: 15,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.3,
    borderColor: "#939393",
    borderRadius: 5,
  },
  textInput: {
    padding: 10,
    marginLeft: 5,
    width: "100%",
  },
  categoryText: {
    color: Colors.HeadingColor,
    fontFamily:'Inter_400Regular'
  },

});
export default HomeScreen;

import { useLayoutEffect } from "react";
import Colors from "../util/Colors";
import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import Hr from "../components/Hr";
import Button from "../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import IconNumber from "../components/IconNumber";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../store/wishlistReducer";

let height = Dimensions.get("window").height * 0.3;
const DetailScreen = () => {
  const products=useSelector(state=>state.product)
  const wishlist=useSelector(state=>state.wishlist)
  const dispatch=useDispatch()

  const navigation=useNavigation()
  const route= useRoute()
  const { productId } = route.params;
  const displayProduct = products.find((n) => n.id === productId);
    //checks if the item is already in wishlist
  //by converting the result to a boolean value
  let isItemInWishlist=!!wishlist.find(n=>n.productId===productId)
  const handleAddToWishlist=(item,)=>{
    dispatch(addItem(item))
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconNumber/> 
      },
    });
  }, []);
  return (
    <View style={styles.root}>
      <View style={styles.flex}>
        <ScrollView style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        >
          <View style={styles.imageView}>
            <Image
              style={styles.image}
              source={{
                uri: displayProduct.image,
              }}
              // source={require("../assets/maxpods.png")}
            />
          </View>
          <View style={styles.productDetailsView}>
            <View style={styles.productNameLikeView}>
              <View>
                <Text style={styles.productNameText}>
                  {displayProduct.name}
                </Text>
                <Text style={styles.productPriceText}>{`$ ${displayProduct.price}`} </Text>
              </View>
              
              <Pressable onPress={()=>handleAddToWishlist(displayProduct)} >
              <View style={styles.iconView}>
                <Ionicons name="heart-outline" size={20} 
                color={isItemInWishlist?"red":"grey"} />
              </View>
              </Pressable>
             
            </View>

            {/* <Text style={styles.chooseColorText}>Choose the color</Text>
            <View style={styles.colorPickerView}>
              <ColorPicker color={"#F5E3DF"} />
              <ColorPicker color={"#ECECEC"} />
              <ColorPicker color={"#E4F2DF"} />
              <ColorPicker color={"#D5E0ED"} />
              <ColorPicker color={"#3E3D40"} />
            </View> */}
            <Hr />
            <View style={styles.descriptionView}>
              <Text style={styles.descriptionHeader}>
                Product Description
              </Text>
              <Text style={styles.descriptionText}>
                Introducing AirPods Max, the pinnacle of wireless audio
                experience. Designed with cutting-edge technology and premium
                materials, these over-ear headphones redefine how you listen to
                music, watch movies, and make calls. Immerse yourself in rich,
                detailed sound with the custom-designed dynamic drivers that
                deliver deep bass, crisp highs, and accurate mids. With active
                noise cancellation, you can block out distractions and enjoy
                your favorite content in pure audio bliss. Transparency mode
                lets you stay aware of your surroundings, making them ideal for
                both immersive listening and on-the-go use.
              </Text>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            paddingHorizontal: 30,
          }}
        >
          <Button />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  flex: {
    flex: 1,
    marginBottom: 35,
  },
  root: {
    flex: 1,
  },
  scrollView: {},
  imageView: {
    elevation: 3,
    shadowOpacity: 0.4,
    backgroundColor: 'white',
    shadowRadius: 5,
  },
  image: {
    width: "100%",
    height: height,
    resizeMode: "cover",
  },
  productDetailsView: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  productNameLikeView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    justifyContent: "space-between",
  },

  productNameText: {
    marginBottom: 5,
    fontSize: 16,
    fontFamily: "Inter_600SemiBold",
  },
  productPriceText: {
    fontSize: 16,
    fontFamily: "Inter_600SemiBold",
  },
  iconView: {
    backgroundColor: Colors.Grey,
    padding: 8,
    borderRadius: 20,
  },
  chooseColorText: {
    color: Colors.DarkGrey,
    marginBottom: 8,
  },
  colorPickerView: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  descriptionView: {
    marginTop: 15,
  },
  descriptionHeader: {
    color: Colors.headerRight,
    fontSize: 16,
    marginBottom: 15,
    fontFamily: "Inter_700Bold",
  },
  descriptionText: {
    fontFamily: "Inter_400Regular",
    lineHeight: 26,
  },
});

export default DetailScreen;

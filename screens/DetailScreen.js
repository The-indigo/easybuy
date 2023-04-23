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
  TouchableOpacity,
} from "react-native";
import ColorPicker from "../components/ColorPicker";
import Hr from "../components/Hr";

let height = Dimensions.get("window").height * 0.3;

const DetailScreen = ({ route, navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Ionicons name={"cart-outline"} size={23} />;
      },
    });
  }, []); //   console.log(height)
  return (
    <View style={styles.root}>
      <View style={styles.flex}>
        <ScrollView style={styles.scrollView} bounces={false}>
          <View style={styles.imageView}>
            <Image
              style={styles.image}
              source={require("../assets/maxpods.png")}
            />
          </View>
          <View style={styles.productDetailsView}>
            <View style={styles.productNameLikeView}>
              <View>
                <Text style={styles.productNameText}>
                  Air pods max by Apple
                </Text>
                <View style={styles.productPriceTextView}>
                  <Text style={styles.productPriceText}>$ 1999,99 </Text>
                  <Text>(219 people buy this)</Text>
                </View>
              </View>
              <View style={styles.iconView}>
                <Ionicons name="heart-outline" size={20} color={"grey"} />
              </View>
            </View>

            <Text style={styles.chooseColorText}>Choose the color</Text>
            <View style={styles.colorPickerView}>
              <ColorPicker color={"#F5E3DF"} />
              <ColorPicker color={"#ECECEC"} />
              <ColorPicker color={"#E4F2DF"} />
              <ColorPicker color={"#D5E0ED"} />
              <ColorPicker color={"#3E3D40"} />
            </View>
            <Hr />
            <View style={styles.descriptionView}>
              <Text style={styles.descriptionHeader}>
                Description of product
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
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  root: {
    flex: 1,
  },
  scrollView: {},
  imageView: {
    elevation: 3,
    shadowOpacity: 0.4,
    backgroundColor: Colors.ProductBackgroundColor,
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
  productPriceTextView: {
    flexDirection: "row",
    gap: 8,
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
  descriptionText:{
    fontFamily:"Inter_400Regular",
    lineHeight:26
  }
});

export default DetailScreen;

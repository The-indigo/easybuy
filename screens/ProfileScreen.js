import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProfileInfoText from "../components/ProfileInfoText";
import Button from "../components/Button";
import Colors from "../util/Colors";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authReducer";
const ProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  return (
    <View style={style.root}>
      <View style={style.backgroundContainer}></View>
      <View style={style.profileContainer}>
        <View style={style.imageContainer}>
          <View></View>
          <View>
            <Image
              style={style.image}
              source={require("../assets/maxpods.png")}
            />
            <Text>Hey there {user ? user.name.split(" ")[0] : "Adeyemi"}</Text>
          </View>

          <Ionicons name="create-outline" size={23} />
        </View>
        <View style={style.profileInfoContainer}>
          <ProfileInfoText
            iconName={"person"}
            infoText={user ? user.name : "Adeyemi"}
          />
          <ProfileInfoText
            iconName={"mail-outline"}
            infoText={user ? user.email : "adepojuadeyemi11@gmail.com"}
          />
          <ProfileInfoText
            iconName={"location"}
            infoText={user ? user.address : "Saltlake city,London"}
          />

          <ProfileInfoText
            iconName={"phone-portrait-outline"}
            infoText={user ? user.phone : "+143789087574"}
          />
        </View>

        <View style={style.profileInfoContainer}>
          <Button text={"Terms Of Use"} />
          <Button text={"Privacy Policy"} />
          <Button text={"Sign Out"} onPress={() => dispatch(logout())} />
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.BackgroundColor,
  },
  backgroundContainer: {
    backgroundColor: Colors.button100,
    height: "20%",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  image: {
    marginTop: -30,
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  profileContainer: {
    backgroundColor: "white",
    flex: 1,
    zIndex: 1,
    marginTop: -20,
    marginHorizontal: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  profileInfoContainer: {
    marginTop: 50,
  },
  profileText: {
    color: "white",
  },
});
export default ProfileScreen;

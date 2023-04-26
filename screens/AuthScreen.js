import { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback,Keyboard, Image } from "react-native";
import Colors from "../util/Colors";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";

const AuthScreen = ({ route, navigation }) => {
  const [isLoginScreen, setIsLoginScreen] = useState(true);

  const authScreenHandler = () => {
    setIsLoginScreen(!isLoginScreen);
  };

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={style.root}>
          <View style={{alignSelf:'center',marginBottom:30 }}>
  <Image style={{height:100, width:100, }} source={require('../assets/shopping.png')}/>
          </View>
        
      {isLoginScreen ? (
        <LoginScreen authScreenHandler={authScreenHandler} />
      ) : (
        <RegisterScreen authScreenHandler={authScreenHandler} />
      )}
            </View>
              </TouchableWithoutFeedback>
  );
};
const style = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    // alignItems:'center',
    backgroundColor: Colors.White,
    paddingHorizontal: 20,
  },
});
export default AuthScreen;

import { StyleSheet,Text,Pressable } from "react-native";

const AlternativeAuthText = ({onPress, login}) => {
    return (
            <Text >
            <Text>{login?"Don't have an account?" :"Already registered?"} </Text>
            <Pressable onPress={onPress} style={style.Pressable}>
              <Text style={style.authOptionText}>{login?"Sign Up" :"Sign In"} </Text>
            </Pressable>
          </Text>
    )
}
const style = StyleSheet.create ({
        authOptionText: {
        // textDecorationLine: "underline",
      fontSize: 16,
        marginBottom:0,
        fontWeight: "bold",
        color: "#4194cb",
    },
      Pressable: {
    alignSelf: 'center',
    marginTop: -3,
  },
})
export default AlternativeAuthText;
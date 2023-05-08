import { View, StyleSheet, Text,Alert } from "react-native";
import InputText from "../components/InputText";
import { useState } from "react";
import { ActivityIndicator } from "react-native";
import AlternativeAuthText from "../components/AlternativeAuthText";
import Button from "../components/Button";
import { signIn } from "../util/services/authService";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { authenticate } from "../store/authReducer";


const LoginScreen = ({authScreenHandler}) => {
  const navigation=useNavigation()
  const dispatch=useDispatch()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    // const authContext=useContext(AuthContext)
    const [credentialsInvalid, setCredentialsInvalid] = useState({
        email: false,
        password: false,
    })
      const updateInput = (inputType, value) => {
    switch (inputType) {
      case "email":
            setEmail(value);
        break;
      case "password":
            setPassword(value);
           
        break;
    }
      };
    const submitHandler = async () => {
        signIn(email, password) 
    setIsLoading(true)
    let trimEmail = email.trim();
    const emailIsValid =trimEmail.includes("@");
    const passwordIsValid = password.length > 6 && password!==undefined;
      if (!emailIsValid || !passwordIsValid) {
      Alert.alert("Yikes!!..Please check your input");
      setCredentialsInvalid({
        email: !emailIsValid,
        password: !passwordIsValid,
      });
          setIsLoading(false)
      return;
      }      
      try {
          const signinResponse = await signIn(email, password)   
          if (signinResponse.hasOwnProperty('idToken') ) {
            // dispatch(authenticate(signinResponse.idToken, signinResponse.user))
            dispatch({ type: 'auth/authenticate', payload:{
              user:signinResponse.user,
              idToken:signinResponse.idToken
            }  })
          } else {
               if (signinResponse.response.data!== undefined) {
                      Alert.alert(signinResponse.response.data.error.message);
       } setIsLoading(false)
          }
    
    setIsLoading(false)
      } catch (e) {
          Alert.alert("Yikes!! Try again"); 
          console.log('signin screen error' + e);
      }
   
  }
    
    return (
      <View>
        <Text style={style.authText}>Log In</Text>
        <InputText
          field={"Email"}
         keyboardType="email-address"
                onUpdateValue={updateInput.bind(this, 'email')}
                value={email}
                isInvalid={credentialsInvalid.email}
        />
            <InputText field={"Password"}
                value={password}
                secure
                onUpdateValue={updateInput.bind(this, 'password')}
                isInvalid={credentialsInvalid.password}
            />
            {isLoading ? <ActivityIndicator size="small" color='#3ded97' /> :
            <Button text={"Log In"} onPress={submitHandler} />
            }  
        <View style={style.alternativeAuth}>
          <AlternativeAuthText login onPress={authScreenHandler}/>
        </View>
      </View>
    );
  
    
}
const style = StyleSheet.create({
    authText: {
        fontSize: 23,
        textAlign: "center",
        marginBottom: 25,
        fontWeight: "bold",
  },
    alternativeAuth: {
        alignItems: "center",
      marginTop: 15,
    },

})
export default LoginScreen
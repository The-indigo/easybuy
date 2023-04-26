import { View, StyleSheet, Text,Alert } from "react-native";
import InputText from "../components/InputText";
import { useContext, useState } from "react";
// import { AuthContext } from "../store/authContext";
import { ActivityIndicator } from "react-native";
import AlternativeAuthText from "../components/AlternativeAuthText";
import Button from "../components/Button";
import { signIn } from "../util/services/authService";


const LoginScreen = ({authScreenHandler}) => {
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
    // setIsLoading(true)
    // let trimEmail = email.trim();
    // const emailIsValid =trimEmail.includes("@");
    // const passwordIsValid = password.length > 6 && password!==undefined;
    //   if (!emailIsValid || !passwordIsValid) {
    //   Alert.alert("Yikes!!..Please check your input");
    //   setCredentialsInvalid({
    //     email: !emailIsValid,
    //     password: !passwordIsValid,
    //   });
    //       setIsLoading(false)
    //   return;
    //   }
      try {
        //   const signinResponse = await signIn(email, password)   
    //       if (signinResponse.hasOwnProperty('idToken') ) {
    //           authContext.authenticate(signinResponse.idToken, signinResponse.user)
           
    //       } else {
    //            if (signinResponse.response.data!== undefined) {
    //           switch (signinResponse.response.data.error.message) {
    //               case ('EMAIL_NOT_FOUND' || 'INVALID_PASSWORD'):
    //                   Alert.alert("oops!!!..Not you trying to use the wrong details");
    //                   break;
    //                 default:
    //                   Alert.alert('Yikes!!!..Something went wrong');   
    //           }
    //    } setIsLoading(false)
    //       }
         
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
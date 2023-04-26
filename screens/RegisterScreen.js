import { View,  StyleSheet, Text, Alert,ActivityIndicator } from "react-native";
import InputText from "../components/InputText";
import { useContext, useState } from "react";
// import { signUp } from "../services/authService";
// import { AuthContext } from "../store/authContext";
import AlternativeAuthText from "../components/AlternativeAuthText";
import Button from "../components/Button";

const RegisterScreen = ({ authScreenHandler }) => {
    // const authContext=useContext(AuthContext)
    const [isLoading,setIsLoading]=useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    phone: false,
      fullname: false,
    address:false,
    confirmPassword: false,
  });

  // {console.log(email)}

  const updateInput = (inputType, value) => {
    switch (inputType) {
      case "email":
        setEmail(value);
        break;
        case "password":
        setPassword(value);
        break;
        case "confirmPassword":
        setConfirmPassword(value);
        break;
      case "fullname":
        setFullname(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "address":
        setAddress(value);
        break;
    }
  };

  const submitHandler=async()=> {
    setIsLoading(true)
    let trimEmail = email.trim();
    const emailIsValid =trimEmail.includes("@");
    const passwordIsValid = password.length > 6;
      const passwordsAreEqual = password === confirmPassword;
      const addressNotEmpty = address.length != 0;
    const phoneIsAcceptable = phone.length >= 10 && phone.length < 12;

      if (!emailIsValid || !passwordIsValid || !passwordsAreEqual || !phoneIsAcceptable || !addressNotEmpty) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid,
        password: !passwordIsValid,
          confirmPassword: !passwordIsValid || !passwordsAreEqual,
          phone: !phoneIsAcceptable,
          address:!addressNotEmpty
        
      });
          setIsLoading(false)
      return;
      }
    //   try {
    //       const signupResponse = await signUp(email, password, phone, address, fullname)   
    //       if (signupResponse.hasOwnProperty('idToken') ) {
    //     authContext.authenticate(signupResponse.idToken,signupResponse.user)
    //           return;
    //       }
    //       if (signupResponse.response.data!== undefined) {
    //           switch (signupResponse.response.data.error.message) {
    //               case ('EMAIL_EXISTS'):
    //                   Alert.alert('Yikes!!!..This email already exists');
    //                   break;
    //                 default:
    //                   Alert.alert('Yikes!!!..Something went wrong');   
    //           }
    //    }
    //   } catch (e) {
    //       Alert.alert("Yikes!! Try again"); 
    //       console.log('signup screen error' + e);
    //   }
   setIsLoading(false)
  }
  return (
    <View>
      <Text style={style.authText}>Sign Up</Text>
      <InputText
        field={"Email"}
        keyboardType="email-address"
        onUpdateValue={updateInput.bind(this, "email")}
              value={email}
              isInvalid={credentialsInvalid.email}
      />
      <InputText
        field={"Password"}
        secure
        onUpdateValue={updateInput.bind(this, "password")}
              isInvalid={credentialsInvalid.password}
      />
      <InputText
        field={"Password Once More"}
        value={confirmPassword}
              secure
               isInvalid={credentialsInvalid.confirmPassword}
        onUpdateValue={updateInput.bind(this, "confirmPassword")}
      />
      <InputText
        field={"Full Name"}
        onUpdateValue={updateInput.bind(this, "fullname")}
              value={fullname}
              isInvalid={credentialsInvalid.fullname}
      />
      <InputText
        field={"Phone"}
        keyboardType="number-pad"
        onUpdateValue={updateInput.bind(this, "phone")}
              value={phone}
              isInvalid={credentialsInvalid.phone}
      />
      <InputText
        field={"Address"}
        onUpdateValue={updateInput.bind(this, "address")}
              value={address}
              isInvalid={credentialsInvalid.address}
          />
          {isLoading ? <ActivityIndicator size="small" color='#3ded97' /> :<Button text={ "Register"}  onPress={submitHandler.bind(this)} />}  
        
        
          <View style={style.alternativeAuth}>
          <AlternativeAuthText onPress={authScreenHandler}/>    
      </View>
    </View>
  );
};
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
  authOptionText: {
    textDecorationLine: "underline",
    fontSize: 16,
    fontWeight: "bold",
    color: "#4194cb",
  },
});
export default RegisterScreen;

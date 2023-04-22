import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider} from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from './screens/HomeScreen';




const Stack= createNativeStackNavigator()
const Tab=createBottomTabNavigator()


const AuthenticatedScreen=()=>{
  return (
    <Tab.Navigator>
      <Tab.Screen
      
      name="Home"
      component={HomeScreen}
      />

    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

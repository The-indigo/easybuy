import { StatusBar } from 'expo-status-bar';
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider} from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import WishlistScreen from './screens/WishlistScreen';
import ProfileScreen from './screens/ProfileScreen';




const Stack= createNativeStackNavigator()
const Tab=createBottomTabNavigator()


const AuthenticatedScreen=()=>{
  return (
    <Tab.Navigator>
      <Tab.Screen
      name="Home"
      component={HomeScreen}
      
      options={{
        tabBarIcon:({ color,size })=>{
          return <Ionicons name={"home-outline"} size={18}/>
        },
        headerShown:false
      }}
      />

<Tab.Screen
      name="Cart"
      component={CartScreen}
      options={{
        tabBarIcon:({ color,size })=>{
          return <Ionicons name={"cart-outline"} size={18}/>
        }
      }}
      />

<Tab.Screen
      name="Wishlist"
      component={WishlistScreen}
      options={{
        tabBarIcon:({ color,size })=>{
          return <Ionicons name={"heart-outline"} size={18}/>
        }
      }}
      />

<Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon:({ color,size })=>{
          return <Ionicons name={"person-outline"} size={18}/>
        }
      }}
      />

    </Tab.Navigator>
  )
}

export default function App() {
  return (
    
   <SafeAreaProvider>
    <NavigationContainer>
      <AuthenticatedScreen/>
    </NavigationContainer>
   </SafeAreaProvider>
  );
}

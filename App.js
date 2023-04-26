import { StatusBar } from 'expo-status-bar';
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider} from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from "@react-navigation/native";
import * as Font from 'expo-font';
import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_500Medium,
  Inter_700Bold
} from '@expo-google-fonts/inter';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import WishlistScreen from './screens/WishlistScreen';
import ProfileScreen from './screens/ProfileScreen';
import {useCallback, useEffect } from 'react';
import SearchScreen from './screens/SearchScreen';
import DetailScreen from './screens/DetailScreen';
import LoginScreen from './screens/LoginScreen';
import AuthScreen from './screens/AuthScreen';




const Stack= createNativeStackNavigator()
const Tab=createBottomTabNavigator()



const TabScreen=()=>{
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
        headerShown:false,
        tabBarIcon:({ color,size })=>{
          return <Ionicons name={"person-outline"} size={18}/>
        }
      }}
      />

    </Tab.Navigator>

  )
}

const AuthenticatedScreen=()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen
            name="Tab"
            component={TabScreen}
            options={{
              headerShown:false
            }}
      />

              <Stack.Screen 
      name='Details'
      component={DetailScreen}
      options={{
        headerTitle:"Deatails Product"
      }}
      />

      <Stack.Screen 
      name='Search'
      component={SearchScreen}
      options={{
        headerShown:false
      }}
      />
    </Stack.Navigator>
  )
}

const AuthenticationScreen=()=>{
  return (
    <Stack.Navigator
    screenOptions={
      {
        headerShown:false
      }
    }
    >
      <Stack.Screen
     name="Authentication"
     component={AuthScreen}
      />
    </Stack.Navigator>
  )
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_500Medium,
  Inter_700Bold
  });


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if(!fontsLoaded){
    return null
  }
   
  return (
    
   <SafeAreaProvider>
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator>
      <Stack.Screen
      name='Auth'
      component={AuthenticationScreen}
      options={{
        headerShown:false
      }}
      />  
      <Stack.Screen
      name='Authenticated'
      component={AuthenticatedScreen}
      options={{
        headerShown:false
      }}
      />  

            </Stack.Navigator>

     
    </NavigationContainer>
   </SafeAreaProvider>
  );
}

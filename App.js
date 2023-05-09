import { StatusBar } from 'expo-status-bar';
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider} from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from "@react-navigation/native";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { combineReducers, legacy_createStore as createStore} from 'redux'
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
import {useCallback, useEffect, useLayoutEffect } from 'react';
import SearchScreen from './screens/SearchScreen';
import DetailScreen from './screens/DetailScreen';
import LoginScreen from './screens/LoginScreen';
import AuthScreen from './screens/AuthScreen';
import authReducer, { authenticate} from './store/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cartReducer, { initializeCart } from './store/cartReducer';
import wishlistReducer from './store/wishlistReducer';
import { configureStore } from '@reduxjs/toolkit';
import { addProduct, fetchProducts } from './util/services/productService';
import productReducer from './store/productReducer';


const store=configureStore({
reducer:{
  auth:authReducer,
  cart:cartReducer,
  wishlist:wishlistReducer,
  product:productReducer
}
} )
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

const Navigation=()=>{ 
  const authState=useSelector(state=>state.auth)
  let isAuth=authState.idToken;
  return(
    <NavigationContainer>
      {isAuth&&<AuthenticatedScreen/>}
      {!isAuth&&<AuthenticationScreen/>}
    </NavigationContainer>
  )

}

const Root=()=>{
  const dispatch=useDispatch()
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_500Medium,
  Inter_700Bold
  });

  useLayoutEffect(()=>{
    const fetchToken=async()=>{
      const userToken=await AsyncStorage.getItem('token')
    const userString=await AsyncStorage.getItem("user")
    // const products=await addProduct()
    // console.log(products);

    if(userString && userToken){
      const user=JSON.parse(userString)
      dispatch({ type: 'auth/authenticate', payload:{
        user:user,
        idToken:userToken
      }  })
      // dispatch(authenticate(userToken,user))
    }
    }
    const getProducts=async()=>{
      const products=await fetchProducts()
        dispatch({ type: 'product/initialize', payload:products.products })
          dispatch(initializeCart()) 
    }
   
    fetchToken()
    getProducts()
  },[])

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded){
    return null
  }

  return (
    <Navigation onReady={onLayoutRootView}/>
  )
}

export default function App() {
   
  return (
    
    <Provider store={store}>
   <SafeAreaProvider>
        <Root/>
   </SafeAreaProvider>
   </Provider>

  );
}

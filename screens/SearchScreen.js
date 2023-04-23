import { SafeAreaView, StyleSheet, Text, View,TextInput } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import Colors from "../util/Colors";
import { FlatList } from "react-native";
import ProductItem from "../components/ProductItem";
import Products from "../data/Products";


const SearchScreen=()=>{
    return (
        <SafeAreaView style={styles.flex}>
            <View style={styles.rootView}>
                <View style={styles.inputDetailsView}>
                <View style={styles.textInputView}>
          <Ionicons name="search-outline" size={18} />
          <TextInput style={styles.textInput} placeholder="Search Here ..." />
        </View>
        <Ionicons name={"cart-outline"} size={23} />
                </View>
                <View style={styles.hr}>

                </View>
                <View style={styles.searchView}>
                    <View>
                        <Text style={styles.searchResultText}>Search result for "Earphone"</Text>
                    </View>
                    <FlatList
                          style={styles.flatlistView}
                          columnWrapperStyle={{
                              justifyContent: 'space-between'
                          }}
                    data={Products}
                    key={(item)=>item.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={(itemData)=>{
                        return (
<ProductItem source={itemData.item.image} name={itemData.item.name} price={itemData.item.price}/>
                        )
                    }}
                    />
                </View>
   

            </View>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    flex:{
        flex:1
    },
    rootView:{
flex:1,
    },
    inputDetailsView:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        paddingHorizontal: 15,
        // borderWidth:3
    },
    textInputView: {
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.3,
        borderColor: Colors.BorderColor,
        borderRadius: 5,
      },
      textInput: {
        padding: 10,
        marginLeft: 5,
        flex:0.85
      },
      hr:{
        borderWidth:0.3,
        borderColor:Colors.BorderColor,
        marginTop:10
      },
      searchView:{
        marginTop:12,
        flex:1,
        paddingHorizontal: 15,
      },
      searchResultText:{
        color:Colors.HeadingColor,
        fontFamily:'Inter_500Medium',
        // fontWeight:600,
        fontSize:15
      },
      flatlistView:{
        flex:1,
        marginTop:15,
    },
})
export default SearchScreen;
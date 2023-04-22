import { Image, StyleSheet, TouchableOpacity, View,Text } from 'react-native'

const CategoryItem=({backgroundColor,onPress,image,text})=>{
    return (
        <View style={styles.itemView}>
        <TouchableOpacity onPress={onPress} style={[{backgroundColor:backgroundColor},styles.touchView]}>
        <View>
            <Image source={image}/>
        </View>
        </TouchableOpacity>
        <Text>{text}</Text>
        </View>
    )
}
const styles= StyleSheet.create({
    itemView:{

    },
    touchView:{
        padding:6,
        borderRadius:5
    }
})
export default CategoryItem
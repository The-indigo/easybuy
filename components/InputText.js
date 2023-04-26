import { TextInput, Text, StyleSheet,View } from "react-native"
import Colors from "../util/Colors"

const InputText = ({field,value,keyboardType,secure,onUpdateValue,isInvalid}) => {
    return(
        <View>
            <Text style={[isInvalid && style.textInvalid]}>{ field}</Text>
            <TextInput style={[style.textInput,isInvalid && style.inputInvalid]}
                
                autoCapitalize={'none'}
                  keyboardType={keyboardType}
        secureTextEntry={secure}
                onChangeText={onUpdateValue}
                value={value}
            />
        </View>
    )
}
const style = StyleSheet.create({
     textInput: {
        // borderBottomColor: colors.loading,
        borderBottomWidth: 2,
        marginBottom:25
    },
    textInvalid: {
      color: Colors.Mahogany
    },
      inputInvalid: {
     borderBottomColor:Colors.Mahogany
  },
})
export default InputText
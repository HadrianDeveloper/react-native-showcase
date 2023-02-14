import { TextInput, StyleSheet } from "react-native";

export default function SearchInput({placeholder}) {
    return (
        <TextInput 
            placeholder={placeholder}
            placeholderTextColor='white'
            autoCapitalize='none'
            autoCorrect={false}
            clearButtonMode='always'
            style={s.input}
            underlineColorAndroid='transparent' />
    )
};

const s = StyleSheet.create({
    input: {
        backgroundColor: '#666',
        color: 'white',
        height: 40,
        minWidth: '75%',
        marginTop: 20,
        padding: 10,
        borderRadius: 11,
        alignSelf: 'center',
        textAlign: 'center'
    },
})
import { useState } from "react";
import PropTypes from 'prop-types';
import { TextInput, StyleSheet } from "react-native";

export default function SearchInput({placeholder, onSubmit}) {

    const [city, setCity] = useState('')

    return (
        <TextInput 
            placeholder={placeholder}
            placeholderTextColor='white'
            autoCapitalize='words'
            autoCorrect={false}
            clearButtonMode='always'
            style={s.input}
            underlineColorAndroid='transparent'
            value={city}
            onChangeText={(text => setCity(text))}
            onSubmitEditing={() => {
                onSubmit(city);
                setCity('');
            }} />
    )
};

SearchInput.propTypes = {
    placeholder: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
}

SearchInput.defaultProps = {
    placeholder: ''
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
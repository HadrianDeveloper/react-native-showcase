import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TimerButton({small, color, title, onPress}) {
    
    return (
        <TouchableOpacity 
            style={[s.button, {borderColor: color}]} 
            onPress={onPress}>
            <Text 
                style={[s.buttonText, small ? s.small : s.large, {color}]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
};

const s = StyleSheet.create({
    button: {
      marginTop: 10,
      minWidth: 100,
      borderWidth: 2,
      borderRadius: 3
    },
    small: {
        fontSize: 14,
        padding: 5,
    },
    large: {
        fontSize: 16,
        padding: 10
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    title: {
        fontsize: 14,
        fontWeight: 'bold'
    },
    elapsedTime: {
        fontsize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10
    }
});
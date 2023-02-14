import { Button, View, StyleSheet } from "react-native";

export default function Landing({navigation}) {
    return (
        <View style={s.container}>
            <Button 
                title='Log in'
                onPress={() => navigation.navigate('Login')}
            />
            <Button 
                title='Sign up'
                onPress={() => navigation.navigate('Signup')}
            />
        </View>
    )
};

const s = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  });
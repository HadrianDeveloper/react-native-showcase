import { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';

export default function Home() {

    const {setUserToken} = useContext(AuthContext);

    return (
        <View style={s.inner}>
            <Text style={s.welcome}>WELCOME TO HADRIAN'S AUTHENTICATION!</Text>
            <Button
              title='Log out' 
              onPress={() => setUserToken(null)}
            />
        </View>
    )
};

const s = StyleSheet.create({
  inner: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  welcome: {
    fontSize: 22,
    textAlign: 'center'
  }
});
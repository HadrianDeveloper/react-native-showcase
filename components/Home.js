import { useContext, useState } from 'react';
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const {setUserToken} = useContext(AuthContext);
    const [red, setRed] = useState(false);
    const pressed = {color: 'red'}; 
    const nav = useNavigation()

    return (
        <View style={s.inner}>
            <Text style={[s.welcome, red && pressed]}>
              WELCOME TO HADRIAN'S SHOWCASE APP!
            </Text>
            <Button title='Weather' onPress={() => nav.navigate('WeatherAPP')} />
            <Button title='Task timer' onPress={() => nav.navigate('TimerAPP')} />
            <Pressable onPress={() => {
              if (red) setRed(false)
              else { setRed(true) }
            }} >
              <Image 
                style={s.img} 
                source={require('../assets/orca.png')} />
            </Pressable>
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
    textAlign: 'center',
  },
  img: {
    width: 100,
    height: 100,
  },
});
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    return (
        <View style={s.inner}>
          <Text style={s.hint}>Enter your username</Text>
          <TextInput 
            placeholder='username'
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={s.input}
          />
          <Text style={s.hint}>Enter your password</Text>
          <TextInput 
            placeholder='password'
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={s.input}
          />
          <Button
            title='submit'
           />
        </View>
    )
};

const s = StyleSheet.create({
  container: {
      flex: 1,
  },  
  inner: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
      textAlign: 'center',
      fontSize: 33,
      marginTop: 10,
  },
  hint: {
      fontSize: 22,
      marginTop: 20,
  },
  input: {
      height: 60,
      width: '75%',
      margin: 12,
      borderWidth: 1,
      borderColor: 'lightgrey',
      padding: 10,
      fontSize: 25,
  },
  button: {
      marginBottom: 3,
  },
});
import { useContext, useState } from 'react';
import { login } from '../../Utils';
import { Button, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';

export default function Login() {
  
  const { setUserToken } = useContext(AuthContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={5}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={s.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={s.inner}>
          <Text style={s.hint}>Enter your username</Text>
          <TextInput 
            autoFocus
            placeholder='username'
            autoCapitalize='none'
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
            disabled={!username || !password}
            onPress={() => login(username, password, setUserToken)}
            />
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
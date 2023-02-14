import { useState, useContext } from 'react';
import { isUsernameUnique } from '../Utils';

import { 
    Button, 
    StyleSheet, 
    Text, 
    TextInput, 
    View, 
    KeyboardAvoidingView, 
    TouchableWithoutFeedback, 
    Keyboard, 
    Platform } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';

export default function Signup() {

    const { setUserToken } = useContext(AuthContext)
    const [username, setUsername] = useState('');
    const [pword, setPword] = useState('');
    const [pwCheck, setPwCheck] = useState('');

    return (
        <KeyboardAvoidingView 
            keyboardVerticalOffset={5}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={s.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={s.inner}>

            <Text style={s.header}>Sign up to access my highly secure app!</Text>
            <Text style={s.hint}>Create a username (min 6 characters) </Text>
            <TextInput
                placeholder='username'
                autoCapitalize='none' 
                autoFocus
                style={s.input} 
                value={username}
                onChangeText={(text) => setUsername(text)}
            />

            {username.length >= 6 && (
                <>
                <Text style={s.hint}>Create a password (min 6 characters)</Text>
                <TextInput
                    secureTextEntry
                    placeholder='password'
                    style={[
                        s.input, 
                        pwCheck && pword === pwCheck && {borderColor: 'green'}
                    ]} 
                    value={pword}
                    onChangeText={(text) => setPword(text)} />
                </>
            )}

            {pword.length >= 6 && (
                <>
                <Text style={s.hint}>Re-enter your password</Text>
                <TextInput
                    secureTextEntry
                    editable={pword.length >= 6}
                    placeholder='enter password again'
                    style={[
                        s.input, 
                        pwCheck === pword && {borderColor: 'green'}
                    ]}
                    value={pwCheck}
                    onChangeText={(text) => setPwCheck(text)} />
                </>
            )}

            <Button
                title='Submit'
                style={s.button}
                disabled={!username || !pword || !pwCheck || pword !== pwCheck}
                onPress={() => isUsernameUnique(username, pword, setUserToken)}
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
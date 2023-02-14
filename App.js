import 'react-native-gesture-handler';
import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Weather from './components/Weather';
import { AuthContext } from './contexts/AuthContext';
import Landing from './components/Landing';

export default function App() {

  const [userToken, setUserToken] = useState('adrian'); // <--------make null when rady for production
  const Stack = createNativeStackNavigator();

  return (
    <AuthContext.Provider value={{userToken, setUserToken}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{title: 'Hadrians PowerAUTH'}}>
    
          {!userToken ? 
            (<>
              <Stack.Screen name='Landing' component={Landing} />
              <Stack.Screen name='Signup' component={Signup} />
              <Stack.Screen name='Login' component={Login} />
            </>)
          :
            //<Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Weather' component={Weather} />
          }

        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

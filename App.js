import 'react-native-gesture-handler';
import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from './contexts/AuthContext';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Home from './components/Home';
import WeatherAPP from './components/Weather/WeatherAPP';
import TimerAPP from './components/Timer/TimerAPP';
import Landing from './components/Auth/Landing';


export default function App() {

  const [userToken, setUserToken] = useState(null); 
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
          : <>
              <Stack.Screen name='Home' component={Home} />
              <Stack.Screen name='WeatherAPP' component={WeatherAPP} />
              <Stack.Screen name='TimerAPP' component={TimerAPP} />
            </>
          }

        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
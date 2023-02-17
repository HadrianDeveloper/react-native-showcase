import { useContext } from 'react';
import { Button } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';

export default function LogoutButton() {

    const {setUserToken} = useContext(AuthContext);

    return (
            <Button
              title='Log out' 
              onPress={() => setUserToken(null)} />
    )
};


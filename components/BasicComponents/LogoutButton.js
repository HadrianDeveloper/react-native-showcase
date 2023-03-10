import { Pressable, Text } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function LogoutButton() {
    const {setUserToken} = useContext(AuthContext);

    return (
        <> 
        <Pressable onPress={() => setUserToken(null)}>
            <Text style={{color: 'white', fontSize: 33}}>Log out</Text>
        </Pressable>
        </>
    )
};
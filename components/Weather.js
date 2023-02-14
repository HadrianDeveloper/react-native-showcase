import { StyleSheet, Platform, Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ImageBackground } from "react-native";
import SearchInput from "./basicComponents/SearchInput";
import LogoutButton from "./BasicComponents/LogoutButton";
import getWeatherImage from "../utils/getWeatherImage";


export default function Weather() {
    return (
        <KeyboardAvoidingView 
            style={s.container}
            behavior='padding'>
        <ImageBackground 
            source={getWeatherImage('Clear')}
            style={s.backgroundContainer}
            imageStyle={s.image}>        
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={s.contentContainer}>
                <View style={[s.container, {flex: 5, justifyContent: 'center'}]}>
                    <Text style={s.largeText}>London</Text>
                    <Text style={s.smallText}>Light clouds</Text>
                    <Text style={[s.largeText, {marginBottom: 40}]}>24°</Text>
                    <SearchInput placeholder="enter city name" />
                </View>
                <View style={[s.container, {flex: 2}]}>
                    <LogoutButton />
                </View>
            </View>
        </TouchableWithoutFeedback>
        </ImageBackground>
        </KeyboardAvoidingView>
    ) 
}; 

const font = Platform.OS ==='ios' ? 'AvenirNext-Regular' : 'Roboto';
const s = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundContainer: {
        flex: 1,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 22,
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    largeText: {
        fontFamily: font,
        fontSize: 44,
        textAlign: 'center',
    },
    smallText: {
        fontFamily: font,
        fontSize: 18,
        textAlign: 'center',
    },
});
import { StyleSheet, Platform, Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ImageBackground, ActivityIndicator, StatusBar } from "react-native";
import SearchInput from "./basicComponents/SearchInput";
import LogoutButton from "./BasicComponents/LogoutButton";
import getWeatherImage from "../utils/getWeatherImage";
import { useState, useEffect } from "react";
import { fetchCoordinates, fetchWeather, fetchWeatherB } from "../utils/weatherApi";


export default function Weather() {

    const [searchterm, setSearchterm] = useState('London');
    const [coords, setCoords] = useState({longitude: -0.127, latitude: 51.507});
    const [loading, setLoading] = useState(false);
    const [forecast, setForecast] = useState({temp: '', weather: ''});

    function handleSubmit(city) {
        fetchCoordinates(city) 
        .then((res) => {
            if (res) {
                setLoading(true);
                setSearchterm(city);
                setCoords({
                    longitude: res.longitude, 
                    latitude: res.latitude
                })
            } else {
                alert('No such place!')
            }
        })
    };

    // useEffect(() => {
    //     fetchWeather(coords) // <------------
    //     .then((res) => {
    //         setForecast({
    //             temp: `${res.temperature}°`, 
    //             weather: res.text
    //         })
    //          setLoading(false)
    //     })
    // }, [coords]);

    const loadedContent = (
        <View style={[s.container, {flex: 5, justifyContent: 'center'}]}>
            <Text style={s.largeText}>{searchterm}</Text>
            <Text style={s.smallText}>{forecast.weather}</Text>
            <Text style={[s.largeText, {marginBottom: 40}]}>{forecast.temp}</Text>
            <SearchInput 
                placeholder="enter city name"
                onSubmit={handleSubmit} />
        </View>
    );

    return (
        <KeyboardAvoidingView 
            style={s.container}
            behavior='padding'>
        <StatusBar barStyle='light-content' />
        <ImageBackground 
            source={getWeatherImage('Clear')}
            style={s.backgroundContainer}
            imageStyle={s.image}>        
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={s.contentContainer}>
                <ActivityIndicator 
                    animating={loading}
                    color='#0000ff'
                    size='large' />
                {!loading && loadedContent}
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
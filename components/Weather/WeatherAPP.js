import { StyleSheet, Platform, Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ImageBackground, ActivityIndicator, StatusBar } from "react-native";
import * as ExpoLocation from 'expo-location';
import SearchInput from "./SearchInput";
import LogoutButton from "../LogoutButton";
import getWeatherImage from "./utils/getWeatherImage";
import { useState, useEffect } from "react";
import { fetchWeather } from "./utils/weatherApi";


export default function WeatherAPP() {

    const [searchterm, setSearchterm] = useState(null);
    const [coords, setCoords] = useState(null);
    const [loading, setLoading] = useState(true);
    const [forecast, setForecast] = useState({temp: '', weather: ''});

    function handleSubmit(city) {
        setLoading(true);
        fetchWeather(city)
        .then((res) => {
            if (res) {
                setSearchterm(res.name);
                setForecast({
                    temp: res.temp,
                    weather: res.desc
                });
                setLoading(false);
            } else {
                alert('Couldn\'t find this place. Try again!')
            }
        })
    };

    useEffect(() => {
        ExpoLocation.requestForegroundPermissionsAsync()
        .then(({status}) => {
            if (status !== 'granted') {
                alert('Need permission to use this app')
                return;
            } 
            return ExpoLocation.getCurrentPositionAsync({})
        })
        .then(({coords}) => {
            setCoords(`${coords.latitude},${coords.longitude}`)
        })
    }, []);

    useEffect(() => {
        if (coords) {
            fetchWeather(coords)
            .then((data) => {
                setSearchterm(data.name)
                setForecast({
                    temp: data.temp,
                    weather: data.desc
                });
                setLoading(false)
            })
        }
    }, [coords])

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
            source={getWeatherImage(forecast.weather)}
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
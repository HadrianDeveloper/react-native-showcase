import { StyleSheet, View, Text } from "react-native";
import { millToHuman } from './utils/timerUtils';
import TimerButton from './TimerButton';


export default function Timer({title, project, elapsed, openForm}) {
    
    const elapsedStr = millToHuman(elapsed);

    return (
        <View style={s.container}>
            <Text style={s.title}>{title}</Text>
            <Text>{project}</Text>
            <Text style={s.elapsedStr}>{elapsedStr}</Text>
            <View style={s.buttContainer}>
                <TimerButton 
                    color='blue' small 
                    title='Edit'
                    onPress={openForm} />
                <TimerButton 
                    color='blue' small 
                    title='Remove' />
            </View>
            <TimerButton 
                color='#21BA45' 
                title='START'
                onPress={() => null} />
        </View>
    )
};

const s = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderColor: '#d6d7da',
        borderWidth: 1,
        borderRadius: 10,
        margin: 15,
        padding: 15,
        marginBottom: 0, 
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    elapsedStr: {
        textAlign: 'center',
        paddingVertical: 15,
        fontWeight: 'bold',
        fontSize: 26,
    },
    buttContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
import { useState } from "react";
import { View, StyleSheet } from "react-native"
import TimerButton from "./TimerButton";
import TimerForm from './TimerForm';

export default function ToggableTimerForm() {

    const [openForm, setOpenForm] = useState(false);

    return (
        <View style={[s.container, !openForm && s.buttPadding]}>
            {openForm ? 
                <TimerForm /> : 
                <TimerButton 
                    title='+' 
                    color='black'
                    onPress={() => setOpenForm(true)} />
            }
        </View>
    )
};

const s = StyleSheet.create({
    container: {
      paddingVertical: 10,
    },
    buttPadding: {
        paddingHorizontal: 15,
    }
}); 
import { useState } from "react";
import { View, StyleSheet } from "react-native"
import TimerButton from "./TimerButton";
import TimerForm from './TimerForm';

export default function ToggableTimerForm({submitChange}) {

    const [openForm, setOpenForm] = useState(false);

    function handleSubmit(data) {
        setOpenForm(false);
        submitChange(data);
    };

    return (
        <View style={[s.container, !openForm && s.buttPadding]}>
            {openForm ? 
                <TimerForm 
                    submitChange={handleSubmit} 
                    handleHideForm={() => setOpenForm(false)} /> : 
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
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import TimerButton from "./TimerButton";

export default function TimerForm({id, title, project, submitChange, handleHideForm}) {

    const [newTitle, setNewTitle] = useState(title);
    const [newProject, setNewProject] = useState(project);

    const buttonText = id ? 'Update' : 'Create'; 

    function handleSubmit() {
        submitChange({id, newTitle, newProject});
    };

    return (
        <View style={s.container}>
            <View style={s.attContainer}>
                <Text style={s.label}>Title</Text>
                <View style={s.inputContainer}>
                    <TextInput
                        style={s.textInput}
                        underlineColorAndroid='transparent'
                        value={newTitle}
                        onChangeText={(text) => setNewTitle(text)}
                    />
                </View>
            </View>
            <View>
                <Text style={s.label}>Project</Text>
                <View style={s.inputContainer}>
                    <TextInput
                        style={s.textInput}
                        underlineColorAndroid='transparent'
                        value={newProject}
                        onChangeText={(text) => setNewProject(text)}
                    />
                </View>
            </View>
            
            <View style={s.buttContainer}>
                <TimerButton 
                    small 
                    color='#21BA45' 
                    title={buttonText}
                    onPress={handleSubmit}
                    disabled={!newTitle || !newProject} />
                <TimerButton 
                    small color='DB2828' 
                    title='Cancel'
                    onPress={handleHideForm} />
            </View>
        </View>
    )
}; 

const s = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      borderWidth: 2,
      borderRadius: 10,
      padding: 15,
      margin: 15,
      marginBottom: 0
    },
    headerContainer: {
      marginVertical: 8
    },
    inputContainer: {
        borderColor: '#D6D7DA',
        borderRadius: 2,
        borderWidth: 1,
        marginBottom: 5
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5
    },
    textInput: {
        height: 30,
        padding: 5,
        fontSize: 12
    },
    buttContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
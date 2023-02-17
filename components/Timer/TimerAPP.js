import { StyleSheet, Text, View, ScrollView } from "react-native";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import ToggableForm from "./ToggableForm";
import EditableTimerCard from "./EditableTimerCard";
import { useState } from "react";

export default function TimerApp() {

  const [timers, setTimers] = useState([
    { 
      id: uuidv4(),
      title: 'Top up birdtable',
      project: 'nature',
      elapsed: '8986300',
      isRunning: true
    },
    { 
      id: uuidv4(),
      title: 'Build rapport with robin',
      project: 'nature',
      elapsed: '3386300',
      isRunning: false
    }
  ]);

    return (
        <View style={s.container}>
          <View style={s.headerContainer}>
            <Text style={s.title}>Hadrian's Timers</Text>
          </View>

          <ScrollView style={s.list}>
            <ToggableForm isOpen={false} />
            {timers.map((t) => (
              <EditableTimerCard
                key={t.id}
                id={t.id}
                title={t.title}
                project={t.project}
                elapsed={t.elapsed}
                isRunning={t.isRunning}
               />
            ))}

          </ScrollView>
        </View>
    )
};

const s = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerContainer: {
      paddingVertical: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#D6D7DA'
    },
    title: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
    },
    list: {
      paddingBottom: 15,
    },
  });
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

function pad(numStr, size) {
    let padded = numStr;
    while (padded.length < size) {
        padded = `0${padded}`;
    }
    return padded
};

export function millToHuman(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor((ms / 1000 / 60 / 60));
        const humanized = [
            pad(hours.toString(), 2),
            pad(minutes.toString(), 2),
            pad(seconds.toString(), 2)
        ].join(':');
    return humanized;
};

export function createTimer({newTitle, newProject}) {
    const timer = {
        id: uuidv4(),
        title: newTitle,
        project: newProject,
        elapsed: 0,
        isRunning: false
    };
    return timer;
};
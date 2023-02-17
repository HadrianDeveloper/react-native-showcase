import TimerForm from "./TimerForm";
import Timer from './Timer';
import { useState } from "react";

export default function EditableTimerCard({id, title, project, elapsed, isRunning, handleUpdate}) {
    
    const [editFormOpen, setEditFormOpen] = useState(false);

    function handleHideAndUpdate(data) {
        setEditFormOpen(false);
        handleUpdate(data)
    };
   
    return (
        <>
        {editFormOpen ? 
            <TimerForm 
                id={id} 
                title={title} 
                project={project}
                submitChange={handleHideAndUpdate}
                handleHideForm={() => setEditFormOpen(false)} /> : 
            <Timer 
                id={id} 
                title={title} 
                project={project} 
                elapsed={elapsed} 
                isRunning={isRunning}
                setEditFormOpen={setEditFormOpen(true)} />
        }
        </>
    )
};
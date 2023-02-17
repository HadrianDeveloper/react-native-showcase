import TimerForm from "./TimerForm";
import Timer from './Timer';
import { useState } from "react";

export default function EditableTimerCard({id, title, project, elapsed, isRunning}) {
    
    const [editFormOpen, setEditFormOpen] = useState(false);
   
    return (
        <>
        {editFormOpen ? 
            <TimerForm 
                id={id} 
                title={title} 
                project={project}
                handleHideForm={() => setEditFormOpen(false)} /> : 
            <Timer 
                id={id} 
                title={title} 
                project={project} 
                elapsed={elapsed} 
                isRunning={isRunning} />
        }
        </>
    )
};
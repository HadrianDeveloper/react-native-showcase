import TimerForm from "./ToggableForm";
import TimerCard from "./TimerCard";

export default function TimerCardTog({id, title, project, elapsed, isRunning, editFormOpen }) {
    
    if (editFormOpen) {
        return <TimerForm 
            id={id} 
            title={title} 
            project={project} />
    };
    
    return (
        <TimerCard 
            id={id} 
            title={title} 
            project={project}
            elapsed={elapsed}
            isRunning={isRunning} />
    )
};

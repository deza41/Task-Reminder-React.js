import { FaTimes,  } from 'react-icons/fa'

function task({task, onDelete, onToggle}) {
    
    return (
        <div className= {task.reminder ? 'task reminder' : 'task'} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/></h3>
            <p>{task.day}</p>
            
        </div>
    ) 


    // if(task.reminder === false){
    //     return (
    //         <div className='task' onDoubleClick={() => onToggle(task.id)}>
    //             <h3>{task.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/></h3>
    //             <p>{task.day}</p>
                
    //         </div>
    //     )  
    // }
    // else{
    //     return (
    //         <div className='task reminder' onDoubleClick={() => onToggle(task.id)}>
    //             <h3>{task.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/></h3>
    //             <p>{task.day}</p>
                
    //         </div>
    //     ) 
    // }
      

}

export default task

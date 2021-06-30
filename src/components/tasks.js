import Task from './task'

const tasks = ({taskList, onDelete, onToggle}) => {
    return (

        <>
            {taskList.map((task) => (
            // <h3 key={task.id}>{task.text}</h3>

            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>

            ))}  
              
        </>
    )
}

export default tasks

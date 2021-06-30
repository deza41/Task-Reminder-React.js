import {useState} from 'react'

//can pass props and refer with props.onAdd etc
const AddTask = (props) => {
 const [text, setTaskItem] = useState('')
 const [day, setDay] = useState('')    
 const [reminder, setReminder] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault()
        if(!text){
            alert('Please add a task')
            return
        }

        props.onAdd({text, day, reminder})

        setTaskItem('')
        setDay('')
        setReminder('')

    }


    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e)=> setTaskItem(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type='text' placeholder='Add Day and Time' value={day} onChange={(e)=> setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save Task' className="btn btn-block"/>
        </form>
    )
}

export default AddTask

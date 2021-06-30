import {useState} from 'react'
import Header from './components/header'
import Tasks from './components/tasks'
import AddTask from './components/AddTask'
import tasks from './components/tasks'


function App() {
  //[array, state name]= (default)
  const [showAddTask, setShowAddTask] = useState(false)
  console.log(showAddTask)
  const [taskList, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Job Interview',
        day: 'Feb 10th at 3:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Dentist',
        day: 'Feb 23th at 1:00pm',
        reminder: false,
    },
    {
      id: 4,
      text: 'HairDresser',
      day: 'Feb 23th at 1:00pm',
      reminder: false,
    },
  ])

  //add task

  const addTaskToList = (task) => {
    //create random id
    const id = Math.floor(Math.random() * 10000) + 1
    //pass opbjects in id and all tasks that have been grabbed
    const newTask = {id, ...task}
    console.log(newTask)
    setTasks([...taskList, newTask])
    }

  //delete task
  const deleteTask = (id) => {
  //uses the state defined and applies a filter
  //.filter creates a new array with all elements passed and a function acting on data
  //sets the taskList to new array
    setTasks(taskList.filter((task) => task.id !== id))

  }

  //toggle reminder
  const toggleReminder = (id) => {
    //gets state
    // ...task (gets spread, same as  a={this.props.a} b={this.props.b})
    setTasks(taskList.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task))
 
  }

  return (
    <div className="container">
      {/* sets the opposite of  "showAddTask" and pushes it into the header*/}
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask ? <AddTask onAdd={addTaskToList}/> :''}
      
      {taskList.length > 0 ? <Tasks taskList = {taskList} onDelete={deleteTask} onToggle={toggleReminder} />
      : 'No Tasks'}
    </div>
  );




}

export default App;

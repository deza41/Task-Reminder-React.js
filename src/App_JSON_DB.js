import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {firebase} from './components/initFirebase'

import Header from './components/header'
import Tasks from './components/tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'


const db = firebase.database()
const taskListRef = db.ref("taskList")
const newTask = taskListRef.push()
newTask.set({
  "text": "Hi Guys2",
  "day": "Tomorrow2",
  "reminder": false,
  "id": 1
})


function App() {
  //[array, state name]= (default)
  const [showAddTask, setShowAddTask] = useState(false)

  //state object that holds all tasks
  const [taskList, setTasks] = useState([])


  useEffect (()=> {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
   
    getTasks()
  }, [])


  //fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/taskList')
    const data = await res.json()
    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch('http://localhost:5000/taskList/'+id)
    const data = await res.json()
    return data
  }

//=============================================================//


  //add task
  const addTaskToList = async (task) => {
    const res = await fetch('http://localhost:5000/taskList/',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json' 
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...taskList, data])
    
    // const id = Math.floor(Math.random() * 10000) + 1
    // //pass opbjects in id and all tasks that have been grabbed
    // const newTask = {id, ...task}
    // console.log(newTask)
    // setTasks([...taskList, newTask])
    }

  //delete task
  const deleteTask = async (id) => {
  //uses the state defined and applies a filter
  //.filter creates a new array with all elements passed and a function acting on data
  //sets the taskList to new array
    await fetch('http://localhost:5000/taskList/' + id,
    {
      method: 'DELETE',
    })
    
    setTasks(taskList.filter((task) => task.id !== id))

  }

  //toggle reminder
  const toggleReminder = async (id) => {
    //gets state
    // ...task (gets spread, same as  a={this.props.a} b={this.props.b})
    const taskToTogggle = await fetchTask(id)
    const updTask = {...taskToTogggle, reminder: !taskToTogggle.reminder }

    const res = await fetch('http://localhost:5000/taskList/'+id,
    {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json' 
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(taskList.map((task) => task.id === id ? {...task, reminder: data.reminder } : task))
 
  }



//====================================================================//



  return (
    <Router>
      <div className="container">
        {/* sets the opposite of  "showAddTask" and pushes it into the header*/}
        <Route exact path='/' render={()=> (
          <>
          <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
          {showAddTask ? <AddTask onAdd={addTaskToList}/> :''}
        
        {taskList.length > 0 ? <Tasks taskList = {taskList} onDelete={deleteTask} onToggle={toggleReminder} />
        : 'No Tasks'}
        <Footer />
          </>
          
        )}>
        </Route>
        <Route path='/about' component={About}></Route>
      </div>
    </Router>


  );
  //<Router>
  // <Route exact path='/about' render={()=> (
  //   <>

  //   </>
  // )}></Route>
  // <Route path='/about' component={About}></Route>
  //</Router>

  // <img src={} />


}

export default App;

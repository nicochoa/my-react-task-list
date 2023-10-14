import { useState , useEffect , createContext, useContext } from 'react'
import { Header } from './components/header/Header'
import { TaskForm } from "./components/TaskForm/TaskForm";
import { TaskList } from './components/TaskList/TaskList'
import { StateListContext } from "./StateListContext";


const tasks = [
  {
      id: 1,
      name: "tarea 1",
      state: true,
  },
  {
      id: 2,
      name: "tarea 2",
      state: false,
  },
  {
      id: 3,
      name: "tarea 3",
      state: true,
  }

]


function App() {
  return (
    <>
      <Header/>
      <TaskList list={tasks} />
    </>
  )
}

export default App

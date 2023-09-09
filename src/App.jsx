import { useState , useEffect } from 'react'
import { Header } from './components/header/Header'
import { TaskList } from './components/TaskList/TaskList'


const tasks = [
  {
      name: "tarea 1",
      state: true,
  },
  {
      name: "tarea 2",
      state: false,
  },
  {
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

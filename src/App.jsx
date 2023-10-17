import { BrowserRouter , Routes, Route } from 'react-router-dom'
import { Header } from './components/header/Header'
import { Suspense , lazy} from 'react';
const HomePage = lazy(()=>import("./pages/HomePage"));
const TaskListPage = lazy(()=>import("./pages/TaskListPage"));
const AboutUsPage = lazy(()=>import("./pages/AboutUsPage"));


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
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={
        <Suspense fallback="Ah ah i i tuki tuki">
          <HomePage/>
        </Suspense>
        }/>
        <Route path='/tasks' element={
        <Suspense fallback="Ah ah i i tuki tuki">
          <TaskListPage/>
        </Suspense>
        }/>
        <Route path='/about-us' element={
        <Suspense fallback="Ah ah i i tuki tuki">
          <AboutUsPage/>
        </Suspense>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

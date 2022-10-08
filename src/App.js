import React from 'react'
import { Route,Routes } from 'react-router-dom'
import About from './components/About'
import Main from './components/Main'
import TaskDetail from './components/TaskDetail'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/about' element={<About />} />
      <Route path="task/:id" element={<TaskDetail />} />
    </Routes>
    
  )
}

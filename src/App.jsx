import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Add from "./Add"



function App() {
  const page = (
    <div>
      <h1>ToDo:</h1>
      <Add />
    </div>
    
  );
  return (
    page
  )
}

export default App

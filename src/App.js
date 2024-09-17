import React from 'react'
import Todo from './components/Todo'
import Darkmode from './components/Darkmode'

const App = () => {
  return (
    <div className='bg-yellow-100 dark:bg-stone-800 h-screen grid py-4 min-h-screen'>
      <Darkmode/>
    <Todo/>
    </div>
  )
}

export default App

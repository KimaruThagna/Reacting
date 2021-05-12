import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  return (
    <div className="container">
      <Header title="Issue Tracker" />
      <Tasks/>
    </div>
  )
}

export default App;

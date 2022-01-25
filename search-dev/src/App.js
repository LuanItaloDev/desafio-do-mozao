import React, { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import api from './services/api'

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    api
      .get('/users/LuanItaloDev')
      .then(response => setUser(response.data))
      .catch(err => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [])

  return (
    <div className="App">
      <Home />
      <p>Usuário: {user?.login}</p>
      <p>Biografia: {user?.bio}</p>
    </div>
  )
}

export default App

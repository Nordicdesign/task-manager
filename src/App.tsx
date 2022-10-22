import React from 'react'
import { useAppSelector } from './app/hooks/hooks'
import { isLoggedIn } from './features/auth/authSlice'
import { ProtectedApp } from './ProtectedApp'
import { PublicApp } from './PublicApp'

function App() {
  const auth: boolean = useAppSelector(isLoggedIn)
  console.log(auth)

  return <div className="App">{auth ? <ProtectedApp /> : <PublicApp />}</div>
}

export default App

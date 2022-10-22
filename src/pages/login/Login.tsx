import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../app/hooks/hooks'
import { logIn } from '../../features/auth/authSlice'
import { ScreenRoutes } from '../../screenRoutes'

export const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const org = useRef<HTMLInputElement>(null)

  const handleLoginForm = (e: any) => {
    e.preventDefault()
    if (!org?.current?.value) {
      return
    }
    const organisation = org.current.value
    dispatch(logIn(organisation))
    navigate(ScreenRoutes.DASHBOARD)
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLoginForm}>
        <div>
          <label htmlFor="organisation">Organisation</label>
          <input type="text" ref={org} name="organisation" />

          <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  )
}

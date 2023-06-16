import React, { useState } from 'react'
import classes from './Login.module.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(usernameInput, passwordInput)

      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className={classes.container}>
    <h1 className={classes.title}>Login</h1>

    <form onSubmit={handleSubmit} className={classes.form} >
      <div className={classes.formGroup}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" onChange={(e) => setUsernameInput(e.target.value)}/>
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={(e) => setPasswordInput(e.target.value)}/>
      </div>
      <div className={classes.formGroup}>
        <button type="submit" >
          Login
        </button>
      </div>
      <a href='/register'>Don't have an account? Register</a>
    </form>
    </div>
  )
}

export default Login


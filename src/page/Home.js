import React from 'react'
import classes from './Home.module.css'
import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'


const Home = () => {
  const { isLoggedIn, logout } = useAuth()

  return (
  <div className={classes.logo}>
   <div className={classes.learnhublogo}>
    <img className={classes.img} src="https://learnhub.thanayut.in.th/logo.svg" alt="LearnHub logo" />
    <a href='/home' className='text-3xl'>LearnHub</a>
    </div>
    <div className={classes.item}>
    {isLoggedIn ? (
          <>
          <NavLink to="/create" className={(arg) => (arg.isActive ? classes.active : undefined)}>
            Create New Content
          </NavLink>
          <button onClick={logout} className={classes.login}>
            Logout
          </button>
          </>
        ) : (
          <div className={classes.loginre}>
            <div>
          <Link to="/login" className={classes.login}>
            Login
          </Link>
          </div>
          <div>
          <NavLink to="/register" className={(arg) => (arg.isActive ? classes.active : undefined)}>
            Register
          </NavLink>
          </div>
          </div>
        )}
      
    </div>
  </div>
  )
}

export default Home
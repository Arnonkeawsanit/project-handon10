import React from 'react'
import classes from './Register.module.css' 

const Register = () => {
  return (
    <div className={classes.container}>
    <h1 className={classes.title}>Register</h1>
    <from className={classes.form}>
    <div className={classes.formGroup}>
      <label htmlFor='username'>Username</label>
      <input type='text' id='username'/>
    </div>
    <div className={classes.formGroup}>
      <label htmlFor='youename'>Your Name</label>
      <input type='text' id='yourname'/>
    </div>
    <div className={classes.formGroup}>
      <label htmlFor='password'>Password</label>
      <input type='password' id='password'/>
    </div>
    <div className={classes.formGroup}>
      <label htmlFor='confirm'>Confirm Password</label>
      <input type='password' id='confirm'/>
    </div>
    <div className={classes.formGroup}>
      <button>Login</button>
    </div>
    <a href='/login'>Already have an account? Login</a>
    </from>
    </div>
    
  )
}

export default Register
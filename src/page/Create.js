import React from 'react'
import classes from './Create.module.css'

const Create = () => {
  return (
    <div className={classes.container}>
        <h1 className={classes.title}>Create new content</h1>
        <form className={classes.form}>
        <div className={classes.formGroup}>
            <label>Video URL</label>
            <input type='text'/>
        </div>
        <div className={classes.formGroup}>
            <label>Comment (280 characters maximum)</label>
            <input type='text'/>
        </div>
        <div className={classes.formGroup}>
        <label>Rating</label>
        </div>
        <div className={classes.formGroup}>
            <button>Create</button>
        </div>
        </form>
    </div>
  )
}

export default Create
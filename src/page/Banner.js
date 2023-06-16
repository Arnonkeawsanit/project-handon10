import React from 'react'
import classes from './Banner.module.css'

const Banner = () => {
  return (
    <section className={classes.banner}>
      <h1 className={classes.learnhub}>LearnHub</h1>
      <h2 className='text-lg'>Hub for Educational Videos</h2>
    </section>
  )
}

export default Banner
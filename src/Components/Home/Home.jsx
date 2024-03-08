import React from 'react'
import NamasteLottie from './lottieAnim'
import "./Home.styles.scss"

const Home = () => {
  return (
    <div className='bg-home-container'>
      <div className='desc-card'>
        <h2>Hello Team, Welcome to My Projects !</h2>
        <br/>
        <br/>
        <h5>Please Navigate through Menu and Side bar for :- </h5>
        <ol>
          <li>Work Samples</li>
          <li>Major Projects</li>
        </ol>
      </div>
      
      <div className='lottie-card'>
        <NamasteLottie/>
      </div>
      
      </div>
  )
}

export default Home
import React from 'react'
import "./Topbar.styles.scss"
import KashLogo from "../../../assets/Kash Logo.webp"
const Topbar = () => {
  return (
      <div className='bg-navbar-comntainer'>
        <div class="nav-item nav-item-logo"><img src={KashLogo}/></div>
        <div class="nav-item nav-item-home">Home</div>
        <div class="nav-item nav-item-samples">Work Samples</div>
        <div class="nav-item nav-item-projects">Self Projects</div>
      </div>
  )
}

export default Topbar
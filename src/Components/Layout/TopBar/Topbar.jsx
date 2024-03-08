import React from 'react'
import {useHistory} from "react-router-dom"
import "./Topbar.styles.scss"
import KashLogo from "../../../assets/Kash Logo.webp"


const Topbar = () => {
  const history=useHistory()
  const onClickWorkSamples=(value)=>{
    history.push(value)
  }
  return (
      <div className='bg-navbar-comntainer'>
        <span className='anim-span one'></span>
        <span className='anim-span two'></span>
        <div class="nav-item nav-item-logo" onClick={()=>onClickWorkSamples("/")}><img src={KashLogo}/></div>
        <div className='nav-item-menus'>
            <button class="nav-item nav-item-home">Home</button>
            <button class="nav-item nav-item-samples" onClick={()=>onClickWorkSamples("/project1")}>Work Samples</button>
            <button class="nav-item nav-item-projects" onClick={()=>onClickWorkSamples("/SelfProjectNavigation")}>Github Projects</button>
        </div>
        
      </div>
  )
}

export default Topbar
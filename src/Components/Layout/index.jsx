import React from 'react'

import Sidebar from './Sidebar/Sidebar'
import Topbar from './TopBar/Topbar'
import Footer from './Footer/Footer'
import "./layout.styles.scss"

const LayoutWrapping = (props) => {
  return (
    <div className='layout-container'>
    <div className='topbar'> <Topbar/></div>
    <div className='sidebar'> <Sidebar/></div>
    <div className='footer'> <Footer/></div>
    <div className='content-section'>
      {props.children}
    </div>
    
    </div>
  )
}

export default LayoutWrapping
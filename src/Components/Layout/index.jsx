import React from 'react'

import Sidebar from './Sidebar/Sidebar'
import Topbar from './TopBar/Topbar'
import Footer from './Footer/Footer'

const LayoutWrapping = ({a}) => {
  return (
    <div>
    <div>Layout</div>
    <Topbar/>
    <Sidebar/>
    <Footer/>
    {/* {a} */}
    </div>
  )
}

export default LayoutWrapping
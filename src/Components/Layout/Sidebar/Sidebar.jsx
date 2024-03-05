import React from 'react'
import {useHistory} from "react-router-dom"

import "./Sidebar.styles.scss"


const Sidebar = () => {
  const history=useHistory()
  const handleClickSidebar=(value)=>{
    history.push(value)
  }
  return (
    <ul className='bg-container-sidebar'>
      <li onClick={()=>handleClickSidebar("/project1")}> <button>Work Sample 1</button></li>
      <li onClick={()=>handleClickSidebar("/project2")}><button>Work Sample 2</button></li>
      <li onClick={()=>handleClickSidebar("/project3")}><button>Work Sample 3</button></li>
      {/* <li onClick={()=>handleClickSidebar("/project4")}><button>Work Sample 4</button></li> */}
      <li onClick={()=>handleClickSidebar("/SelfProjectNavigation")}><button>Projects with Github Repos </button></li>
    </ul>
  )
}

export default Sidebar
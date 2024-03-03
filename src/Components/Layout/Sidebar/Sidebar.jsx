import React from 'react'
import {Link} from "react-router-dom"

import "./Sidebar.styles.scss"
const Sidebar = () => {
  return (
    <ul className='bg-container-sidebar'>
      <li><Link to="/project1"><button>Work Sample 1</button></Link></li>
      <li><Link to="/project2"><button>Work Sample 2</button></Link></li>
      <li><Link to="/project3"><button>Work Sample 3</button></Link></li>
      <li><Link to="/project4"><button>Work Sample 4</button></Link></li>
      <li><Link to="/project5"><button>Self Project 1</button></Link></li>
      <li><Link to="/project6"><button>Self Project 2</button></Link></li>
      <li><Link to="/project7"><button>Self Project 3</button></Link></li>
      <li><Link to="/project8"><button>Self Project 4</button></Link></li>
    </ul>
  )
}

export default Sidebar
import React from 'react'
import {useHistory} from "react-router-dom"
import "./styles.scss"
const SelfProjectNavigation = () => {
  const history=useHistory()
  const onClickProjects=(value)=>{
    history.push(value)
  }
  return (
    <div className="bg-container-split">
      <div className="bg-container-major" onClick={()=>onClickProjects("/major")}>
        <p>Major Projects</p>
      </div>
      <div className="bg-container-minor" onClick={()=>onClickProjects("/minor")}>
        <p>Minor Projects</p>
      </div>
    </div>
  );
}

export default SelfProjectNavigation
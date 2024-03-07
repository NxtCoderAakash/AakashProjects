import React,{ useState, useEffect,useRef} from 'react'

import Sidebar from './Sidebar/Sidebar'
import Topbar from './TopBar/Topbar'
import Footer from './Footer/Footer'
import "./layout.styles.scss"

const LayoutWrapping = (props) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const layoutRef=useRef(0)
  useEffect(() => {
    zoomOutToFit();
  }, []);
  const zoomOutToFit = () => {
    const contentContainer = layoutRef;
    const contentWidth = contentContainer.scrollWidth;
    const contentHeight = contentContainer.scrollHeight;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const scaleX = viewportWidth / contentWidth;
    const scaleY = viewportHeight / contentHeight;

    const scale = Math.min(scaleX, scaleY);

    setZoomLevel(scale);
  };
  return (
    <div className='layout-container' ref={layoutRef} style={{ transform: `scale(${zoomLevel})` }}>
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
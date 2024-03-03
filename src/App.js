// import logo from './logo.svg';
import {Route,BrowserRouter,Switch} from "react-router-dom"
import './App.css';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login/Login';
import Project1 from './Components/Projects/Project1/project';
import Project2 from './Components/Projects/Project2/Project';
import Home from './Components/Home/Home';
import Sidebar from "./Components/Layout/Sidebar/Sidebar";
import Topbar from "./Components/Layout/TopBar/Topbar";
import Footer from "./Components/Layout/Footer/Footer";
// import LayoutWrapping from "./Components/Layout";

const LayoutWrapping = (props) => {
  
  return (
    <div>
    <div>Layout</div>
    <Topbar/>
    <Sidebar/>
    <Footer/>
    {props.children}
    </div>
  )
}

function App() {
  return (
  <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() =><LayoutWrapping><Home/></LayoutWrapping>}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/project1" exact render={() =><LayoutWrapping><Project1/></LayoutWrapping>}/>
        <Route path="/project2" exact componrender={() =><LayoutWrapping><Project2/></LayoutWrapping>}/>
        <Route component={NotFound}/>
      </Switch>
  </BrowserRouter>
  );
}

export default App;

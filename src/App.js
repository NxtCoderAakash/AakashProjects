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
import LayoutWrapping from "./Components/Layout";
import Project3 from "./Components/Projects/Project3/Project";
import Project4 from "./Components/Projects/Project4/Project";
import Project5 from "./Components/Projects/Project5/Project";
import Project7 from "./Components/Projects/Project7/Project";
import Project8 from "./Components/Projects/Project8/Project";
import Project6 from "./Components/Projects/Project6/Project";

// const LayoutWrapping = (props) => {

//   return (
//     <div>
//     <div>Layout</div>
//     <Topbar/>
//     <Sidebar/>
//     <Footer/>
//     <div>
//       {props.children}
//       </div>
    
//     </div>
//   )
// }

function App() {
  return (
  <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() =><LayoutWrapping><Home/></LayoutWrapping>}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/project1" exact render={() =><LayoutWrapping><Project1/></LayoutWrapping>}/>
        <Route path="/project2" exact render={() =><LayoutWrapping><Project2/></LayoutWrapping>}/>
        <Route path="/project3" exact render={() =><LayoutWrapping><Project3/></LayoutWrapping>}/>
        <Route path="/project4" exact render={() =><LayoutWrapping><Project4/></LayoutWrapping>}/>
        <Route path="/project5" exact render={() =><LayoutWrapping><Project5/></LayoutWrapping>}/>
        <Route path="/project6" exact render={() =><LayoutWrapping><Project6/></LayoutWrapping>}/>
        <Route path="/project7" exact render={() =><LayoutWrapping><Project7/></LayoutWrapping>}/>
        <Route path="/project8" exact render={() =><LayoutWrapping><Project8/></LayoutWrapping>}/>

        <Route component={NotFound}/>
      </Switch>
  </BrowserRouter>
  );
}

export default App;

// import logo from './logo.svg';
import {Route,BrowserRouter,Switch} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import NotFound from '../Components/NotFound/NotFound';
import Login from '../Components/Login/Login/Login';
import Project1 from '../Components/Projects/Project1/project';
import Project2 from '../Components/Projects/Project2/Project';
import Home from '../Components/Home/Home';
import Sidebar from "../Components/Layout/Sidebar/Sidebar";
import Topbar from "../Components/Layout/TopBar/Topbar";
import Footer from "../Components/Layout/Footer/Footer";
import LayoutWrapping from "../Components/Layout";
import Project3 from "../Components/Projects/Project3/Project";
import Project4 from "../Components/Projects/Project4/Project";
// import Project5 from "../Components/Projects/Project5/Project";
// import Project7 from "../Components/Projects/Project7/Project";
// import Project8 from "../Components/Projects/Project8/Project";
import Project6 from "../Components/Projects/Project6/Project";
import store from "./store"
import { Provider } from "react-redux";
import "../scss/btn.scss"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css'
import 'rc-pagination/assets/index.css'

import 'rsuite/dist/styles/rsuite-default.css'
import MajorProjects from "../Components/Projects/MajorProjects"
import MinorProjects from "../Components/Projects/MinorProjects";
import SelfProjectNavigation from "../Components/Projects/SelfProjectNavigation";
import Bookhub from "../Components/Projects/BookHub/Project";
import Jobby from "../Components/Projects/Jobby/Project";
import Nxtwatch from "../Components/Projects/NxtWatch/Project";
import Nxttrendz from "../Components/Projects/NxtTrendz/Project";


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
    <Provider store={store}>

    
  <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() =><LayoutWrapping><Home/></LayoutWrapping>}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/project1" exact render={() =><LayoutWrapping><Project1/></LayoutWrapping>}/>
        <Route path="/project2" exact render={() =><LayoutWrapping><Project2/></LayoutWrapping>}/>
        <Route path="/project3" exact render={() =><LayoutWrapping><Project3/></LayoutWrapping>}/>
        <Route path="/project4" exact render={() =><LayoutWrapping><Project4/></LayoutWrapping>}/>
        <Route path="/SelfProjectNavigation" exact render={() =><LayoutWrapping><SelfProjectNavigation/></LayoutWrapping>}/>
        {/* <Route path="/project6" exact render={() =><LayoutWrapping><Project6/></LayoutWrapping>}/> */}
        {/* <Route path="/project7" exact render={() =><LayoutWrapping><Project7/></LayoutWrapping>}/> */}
        {/* <Route path="/project8" exact render={() =><LayoutWrapping><Project8/></LayoutWrapping>}/> */}
        <Route path="/major" exact render={() =><LayoutWrapping><MajorProjects/></LayoutWrapping>}/>
        <Route path="/minor" exact render={() =><LayoutWrapping><MinorProjects/></LayoutWrapping>}/>
        <Route path="/bookhub" exact render={() =><LayoutWrapping><Bookhub/></LayoutWrapping>}/>
        <Route path="/nxtwatch" exact render={() =><LayoutWrapping><Nxtwatch/></LayoutWrapping>}/>
        <Route path="/nxttrendz" exact render={() =><LayoutWrapping><Nxttrendz/></LayoutWrapping>}/>
        <Route path="/jobby" exact render={() =><LayoutWrapping><Jobby/></LayoutWrapping>}/>
        <Route render={() =><LayoutWrapping><NotFound/></LayoutWrapping>}/>
      </Switch>
  </BrowserRouter>
  </Provider>
  );
}

export default App;

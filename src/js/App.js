import React from 'react';
//import MyMain from './MyMain.js';

import {Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import AdminSpace from "./pages/AdminSpace";
import CookerSpace from "./pages/CookerSpace";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserSpace from "./pages/UserSpace";



// class App extends React.Component{
// constructor(props){
//     super(props);
// }

//     render(){
//         return(<>
//         <MyMain />
//         </>);
//     }
// }

function App(props) {
    return(
        <Router>

            <div className="container">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/adminSpace"></Link>
                        </li>
                        <li>
                            <Link to="/cookerSpace"></Link>
                        </li>
                        <li>    
                            <Link to="/index"></Link>
                        </li>
                        <li>    
                            <Link to="/login"></Link>
                        </li>
                        <li>    
                            <Link to="/register"></Link>
                        </li>   
                        <li> 
                            <Link to="/userSpace"></Link>
                        </li>
                    </ul>
                </nav>
                <Switch> 
                    <Route path="/" component={Home}/>
                    <Route path="/adminSpace" component={AdminSpace}/>
                    <Route path="/cookerSpace" component={CookerSpace}/>
                    <Route path="/index" component={Index}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/userSpace" component={UserSpace}/>
        
                </Switch>
            </div>

        </Router>

      //  <div>
      // <MyMain />
      //  </div>
    )
}

export default App;
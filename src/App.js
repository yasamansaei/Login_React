import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <React.Fragment>  
      <Router>
          <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>RemoteStack</Link>
          <Link className="navbar-brand" to={"/welcome"}>welcome</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/welcome" component={Welcome} />
          </Switch>
        </div>
      </div>
    </div>
    </Router>

    </React.Fragment>
  );
}

export default App;

import React, { useReducer, useContext } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Welcome from "./Components/Welcome";
const

const initialState = {
  userName: '',
  PassWord: '',
  isLogin: false,
  error: ''
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'Login':
      if (action.user == 'Admin' && action.pass == '123') {
        return { ...state, userName: action.user, PassWord: action.PassWord, isLogin: true, error: '' }
      }
      else {
        return { ...state, isLogin: false, error: 'Login Failed' }
      }

      break;
    case 'SignOut':

      break;
    default:
      break;
  }

}
function App() {
  const [stateUser, dispatch] = useReducer(reducer, initialState)
  let islogin = stateUser.isLogin;
  const renderAuthButton = () => {
    if (islogin) {
      return <li className="nav-item"><Link className="nav-link" to={"/sign-Out"}>Sign in</Link></li>
    } else {
      return <><li className="nav-item"><Link className="nav-link" to={"/Log-in"}>Sign in</Link></li>
        <li className="nav-item"><Link className="nav-link" to={"/sign-up"}>Sign up</Link></li></>
    }
  }
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
                  {renderAuthButton()}

                </ul>
              </div>
            </div>
          </nav>

          <div className="outer">
            <div className="inner">
              <Switch>

                <Route exact path='/' component={stateUser.isLogin ? Welcome : Login} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/sign-Out" component={SignUp} />
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

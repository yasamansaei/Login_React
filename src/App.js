import React, { useReducer,useEffect } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import { BrowserRouter as Router, Switch, Route, Link, useHistory} from "react-router-dom";
import Welcome from "./Components/Welcome";
import { string } from "prop-types";
import Home from "./Components/Home";

export const UserContext = React.createContext()

const initialState = {
  userName: '',
  PassWord: '',
  isLogin: false,
  error: ''
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'Login':
     
      console.log(action.user);
      console.log(action.passWord);
      if (action.user === '' || action.passWord===''){
        return { ...state, isLogin: false, error: 'User Or Pass Is Empty' }
      }
      else if (action.user === 'Admin' && action.passWord === '123') {
        return { ...state, userName: action.user, PassWord: action.passWord, isLogin: true, error: '' }
      }
      else {
        return { ...state, isLogin: false, error: 'Login Failed' }
      }

      break;
    case 'SignOut':
      return { isLogin: false, error: '' ,userName: '',PassWord: '',}
    default:
      return state;
  }

}
function App() {
      const history = useHistory();
  const [stateUser, dispatch] = useReducer(reducer, initialState)
  let islogin = stateUser.isLogin;
  const renderAuthButton = () => {
    if (islogin) {
      return <li className="nav-item"><Link className="nav-link"  to="/" onClick={()=>dispatch({type:'SignOut'}) } >Sign Out</Link></li>
    } else {
      return <><li className="nav-item"><Link className="nav-link" to={"/sign-in"}>Sign in</Link></li>
        <li className="nav-item"><Link className="nav-link" to={"/sign-up"}>Sign up</Link></li></>
    }
  }

  useEffect(() => {
    if (stateUser.isLogin){
      console.log(stateUser.isLogin)
    history.push("/welcome");
    }
  }, [stateUser])
  return (
    <React.Fragment>
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/"}>Home</Link>
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
                <UserContext.Provider value={{ dispatchUser: dispatch,state:stateUser }}>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/home' component={Home} />
                  <Route path="/sign-in" component={Login} />
                  <Route path="/sign-up" component={SignUp} />
                  <Route path="/welcome" component={stateUser.isLogin ? Welcome : Login} />
                </UserContext.Provider>
              </Switch>
            </div>
          </div>
        </div>
      </Router>

    </React.Fragment>
  );
}

export default App;

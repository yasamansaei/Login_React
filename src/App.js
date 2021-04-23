import React from "react";
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'
import ToDoList from "./Components/ToDoList";
import {BrowserRouter, Route} from 'react-router-dom'
import About from "./Components/About";
import Header from "./Components/Header";

function App() {
  return (
    <React.Fragment>  <BrowserRouter>
    <Header/>
    <div className="container">
      
      <div className="main">
      
        <Route path="/" exact >
        <ToDoList/>
        </Route>
        <Route path={`/about/id=:id&Nme=:Name`} >
          <About/>
        </Route>
        <Route path="/ConatactUs/:id" component={()=><h2>ConatactUs</h2>}></Route>
        <Route path="/News" component={()=><h2>News</h2>}></Route>
        
      </div>
    </div> </BrowserRouter></React.Fragment>
  );
}

export default App;

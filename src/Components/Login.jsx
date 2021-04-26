import React,{ useState,useRef,useContext } from 'react'
import { useHistory } from 'react-router-dom';
import {UserContext} from '../App'

function Login() {
    // const history = useHistory();
    const context = useContext(UserContext)
    // const handleClick = () => {
    //     history.push("/welcome");
    // }

    const refEmail = useRef('');
    const refPass = useRef('');
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        context.dispatchUser({type:'Login',user:refEmail.current.value,passWord:refPass.current.value})

    }
    return (
        <>
            < form onSubmit={(e)=>handleSubmit(e)} >

                <h3>Log in</h3>
                <h4 className="text-danger text-center">{context.state.error} </h4>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" ref={refEmail} placeholder="Enter email"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" ref={refPass} placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form >
        </>
    )
}

export default Login

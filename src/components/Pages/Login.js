import React from 'react';
import './style.css';


 const Login = () =>{
    return (
        <main className='container'>
            <section>
                <h1>Login Page</h1>
                <div id="wrapper">
    <div id="header">
    	 <h1>CSC506 Web & Internet Programming</h1>
    </div>
            <div className="login-wrap">
            <div className="login-html">
            <input id="tab-1" type="radio" name="tab" className="sign-in" checked>
            <label for="tab-1" className="tab">Login</label>
            <input id="tab-2" type="radio" name="tab" className="sign-up">
            <div className="login-form">
            <div className="sign-in-htm"> 
            <div className="group">
            <label for="user" className="label">Username</label>
            <input id="user" type="text" className="input">
            </div> 
            <div className="group">
            <label for="pass" className="label">Password</label>
            <input id="pass" type="password" className="input" data-type="password">
            </div>
            <div className="group">
            <input id="check" type="checkbox" className="check" checked>
            <label for="check">
            <span className="icon"></span> Keep me Logged in</label> 
            </div>
            <div className="group">
            <a href="home.html"><input type="submit" className="button" value="Login"></a>
            </div>
            <div className="hr"></div>
            <div className="foot-lnk">
            <a href="#forgot">Forgot Password?</a>
            </div>
            </div>
            </div>
            </div>
            </div>
            
                </div>
            </section>
        
        </main>
    )
}

export default Login
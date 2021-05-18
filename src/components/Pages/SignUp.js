import React from 'react'
import './style.css';


 const SignUp = () =>{
    return (
        <main className='container'>
            <section>
                <h1>SignUp Page</h1>
                <div id="wrapper">
    <div id="header">
    	 <h1>CSC506 Web & Internet Programming</h1>
    </div>
    <input id="tab-2" type="radio" name="tab" className="sign-up">
    <label for="tab-2" className="tab">Sign Up</label>
                <div className="sign-up-htm">
 <div className="group">
 <label for="user" className="label">Username</label>
 <input id="user" type="text" className="input">
 </div>
 <div className="group">
 <label for="pass" className="label">Password</label>
 <input id="pass" type="password" className="input" data-type="password">
 </div>
 <div className="group">
 <label for="pass" className="label">Repeat Password</label>
 <input id="pass" type="password" className="input" data-type="password">
 </div>
 <div className="group">
 <label for="pass" className="label">Email Address</label>
 <input id="pass" type="text" className="input">
 </div>
 <div className="group">
 <a href="home.html"><input type="submit" className="button" value="Register"></a>
 </div>
 <div className="hr"></div>
 <div className="foot-lnk">
 <label for="tab-1">Already Member?</a>
 </div>
</div>
<div id="footer">
	<center>Copyright &copy; All rights reserved, CSC506: Web & Internet Programming</center>
</div>
</div>

            </section>
        
        </main>
    )
}

export default SignUp
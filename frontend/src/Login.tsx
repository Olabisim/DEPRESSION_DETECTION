import { useState } from 'react'
import './css/login.css'


export const Login = () => {

        // FOR LOGIN
        const [logusername, setLogusername] = useState<string>('')
        const [logpassword, setLogpassword] = useState<string>('')

        // FOR REGISTER
        const [regusername, setRegusername] = useState<string>('')
        const [regpassword, setRegpassword] = useState<string>('')
        const [regemail, setRegemail] = useState<string>('')

        console.log(logusername)

        return (
                <div className="login_main">       
                <div className="login-wrap">
                        <div className="login-html">
                                <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
                                <label htmlFor="tab-1" className="tab">Sign In</label>
                                <input id="tab-2" type="radio" name="tab" className="sign-up" />
                                <label htmlFor="tab-2" className="tab">Sign Up</label>
                                <div className="login-form">
                                        <div className="sign-in-htm">
                                                <div className="group">
                                                        <label htmlFor="user" className="label">Username</label>
                                                        <input id="user" type="text" className="input" value={logusername} onChange={(e) => setLogusername(e.target.value)} />
                                                </div>
                                                <div className="group">
                                                        <label htmlFor="pass" className="label">Password</label>
                                                        <input id="pass" type="password" className="input" data-type="password" value={logpassword} onChange={(e) => setLogpassword(e.target.value)} />
                                                </div>
                                                <div className="group">
                                                        <input id="check" type="checkbox" className="check" checked />
                                                        <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
                                                </div>
                                                <div className="group">
                                                        <input type="submit" className="button" value="Sign In" />
                                                </div>
                                                <div className="hr"></div>
                                                <div className="foot-lnk">
                                                        <a href="#forgot">Forgot Password?</a>
                                                </div>
                                        </div>
                                        <div className="sign-up-htm">
                                                <div className="group">
                                                        <label htmlFor="user" className="label">Username</label>
                                                        <input id="user" type="text" className="input" value={regusername} onChange={(e) => setRegusername(e.target.value)} />
                                                </div>
                                                <div className="group">
                                                        <label htmlFor="pass" className="label">Password</label>
                                                        <input id="pass" type="password" className="input" data-type="password" value={regpassword} onChange={(e) => setRegpassword(e.target.value)}/>
                                                </div>
                                                <div className="group">
                                                        <label htmlFor="pass" className="label">Repeat Password</label>
                                                        <input id="pass" type="password" className="input" data-type="password" />
                                                </div>
                                                <div className="group">
                                                        <label htmlFor="pass" className="label">Email Address</label>
                                                        <input id="pass" type="text" className="input" value={regemail} onChange={(e) => setRegemail(e.target.value)} />
                                                </div>
                                                <div className="group">
                                                        <input type="submit" className="button" value="Sign Up" />
                                                </div>
                                                <div className="hr"></div>
                                                <div className="foot-lnk">
                                                        <label htmlFor="tab-1">Already Member? </label>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
                </div>
        )
}



import { Link } from 'react-router-dom'
import './css/home.css'
import './css/button.css'


export const Home = () => {
        return (
                <div>
                        <div className="home_main">
                                <header className="home_header">

                                        <div className="home_headerimgbx">
                                                <div className="home_header-im">
                                                        <img  className="home_headerimg" src="https://images.unsplash.com/photo-1556139930-c23fa4a4f934?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="bg_image" />
                                                        <div className='main_home_textbx'>
                                                                
                                                                <div className="home_textbx">
                                                                        A self test can help you <br /> decide <br /> what to do.
                                                                </div>

                                                        </div>
                                                </div>
                                        </div>

                                        
                                </header>
                        </div>

                        {/* <div>

                                <div className="home_header-rig">
                                        <div className="home_headertext-bx">
                                                <h1 className="home_title">Where dimensions take shape
                                                </h1>
                                                <p className="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                                <a href="#s" className="buttn">Read More</a>
                                        </div>
                                </div>

                        </div> */}
                        <br />
                        <br />
                        <div className="home_text_div">
                                <p>

                                        Having a low mood or feeling on edge are common experiences for us all.
                                        When these moods persist, it may be that you are experiencing depression 
                                        or anxiety - or both. These self tests ask some important questions that
                                        can help you take stock of where you are at so you can make a plan for 
                                        feeling better sooner.

                                </p>

                                <p>
                                        Whe you're going through a tough time it's normal to feel
                                        down for a while, emotions like sadness and grief help make
                                        us human. But if you're feeling sad or miserable most of the 
                                        time over a long period of time, you might have depression.
                                </p>

                                <p>
                                        Take this self test to help figure out whether you're showing any of the 
                                        warning signs of depression. This won't give you a diagnosis but it will
                                        help you decide the next step.
                                </p>


                        </div>

                        <br />
                        <br />

                        <div className="home_main_second">
                                <h2>WORRIED ABOUT HOW YOU FEEL</h2>
                                <Link to="/test" >
                                        <div className="ta-c">
                                                <button className="button accept-btn" >
                                                        Take a test
                                                </button>
                                        </div>
                                
                                </Link>
                        </div>
                </div>
        )
}

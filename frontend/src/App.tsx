import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {Login} from './Login'
import {Home} from './Home'
import {QApage} from './QApage'
import {TestChart} from './TestChart'


function App() {

        return (

                <Router>

                        <Routes>
                                <Route path='/login' element={ < Login /> } />
                                <Route path='/' element={ < Home /> } />
                                <Route path='/test' element={ < QApage /> } />
                                <Route path='/chart' element={ < TestChart /> } />
                        </Routes>

                </Router>


        );
}

export default App;

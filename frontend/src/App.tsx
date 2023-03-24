import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import {Login} from './Login'
import {Home} from './Home'
import {QApage} from './QApage'
import {TestChart} from './TestChart'
import {ChartPage} from './ChartPage'
import { createContext, useState } from 'react';


export const QuestionDataContext = createContext<any>(null)


function App() {

        const [dataSetter, setDataSetter] = useState<any>('')

        return (

                <QuestionDataContext.Provider value={{dataSetter, setDataSetter}}>
                        
                <Router>

                        <Routes>
                                {/* <Route path='/' element={ < Login /> } /> */}
                                <Route path='/' element={ < Home /> } />
                                <Route path='/test' element={ < QApage /> } />
                                <Route path='/chart' element={ < ChartPage /> } />
                                <Route path='/charttest' element={ < TestChart /> } />
                        </Routes>

                </Router>

                </QuestionDataContext.Provider>


        );
}

export default App;

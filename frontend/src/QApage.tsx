

import { ReactElement, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { QuestionDataContext } from './App'
import { useNavigate } from 'react-router-dom';
import './css/button.css'
import './css/qapage.css'



interface questions {
        question: String,
        options:  {
                value?: number,
                title: string
        }[] 
}

interface quiztyppe  {
        title: String,
        questions: questions[]
}

const quiz:quiztyppe[] = [
        {
                title: "Persistent depressed (low) mood",
                questions: [
                        { question: "-	Do you feel down or sad regularly", options: [{value: 6.7, title: "Very often"}, {value: 3.35, title: "Often"}, {value: 0, title: "Never"}]},
                        { question: "-	Does it last longer than normal", options:[{value: 6.7, title: "Very often"}, {value: 3.35, title: "Often"}, {value: 0, title: "Never"}]},
                        { question: "-	Can you shake it off", options:[{value: 6.7, title: "Very often"}, {value: 3.35, title: "Often"}, {value: 0, title: "Never"}]},
                ]
        },
        {
                title: "Loss of interest in things you once enjoyed",
                questions: [
                        { question: "-	How often do you do things you love to do", options: [{value: 6.7, title: "Not at all"}, {value: 3.35, title: "Several Days"}, {value: 0, title: "Nearly Everyday"}]},
                        { question: "-	How strong is the drive to do what you enjoy",  options:[{value: 6.7, title: "Very strong"}, {value: 3.35, title: "strong"}, {value: 0, title: "not strong"}]},
                        { question: "-	Do you see thing you do with pleasure before as pointless",  options:[{value: 6.7, title: "no"}, {value: 3.35, title: "not sure"}, {value: 0, title: "yes"}]},
                ]
        },
        {
                title: "Feeling of worthlessness.",
                questions: [
                        { question: "-	Do you often feel you have let you self down.", options: [{value: 6.7, title: "Very Often"}, {value: 3.35, title: "Often"}, {value: 0, title: "never"}]},
                        { question: "-	Do you temporarily feel fraustrated with your action or behaviour", options: [{value: 6.7, title: "Very Often"}, {value: 3.35, title: "Often"}, {value: 0, title: "never"}]},
                        { question: "-	Do you continuously feel unworthy or in adequate in multilple area of your life.",  options: [{value: 6.7, title: "Very Often"}, {value: 3.35, title: "not regulary"}, {value: 0, title: "never"}]},
                ]
        },
        {
                title: "Poor concentration ",
                questions: [
                        { question: "-	Do you have trouble focusing or concentrating at work or school.  ",  options: [{value: 6.7, title: "Very Often"}, {value: 3.35, title: "not regulary"}, {value: 0, title: "never"}]},
                        { question: "-	Do you often have trouble completing simple task.",  options: [{value: 6.7, title: "Very Often"}, {value: 3.35, title: "not regulary"}, {value: 0, title: "never"}]},
                        { question: "-	Do you find it hard to manage most familiar or easy activities.",  options: [{value: 6.7, title: "Yes"}, {value: 3.35, title: "Not sure"}, {value: 0, title: "No"}]},
                ]
        },
        {
                title: "Thought of harming yourself.",
                questions: [
                        { question: "-	Do you often get thought of not wanting to be alive", options: [{value: 6.7, title: "Very Often"}, {value: 3.35, title: "not regulary"}, {value: 0, title: "never"}]},
                        { question: "-	Do you often get thought of harming yourself in anyway",  options: [{value: 6.7, title: "Very Often"}, {value: 3.35, title: "not regulary"}, {value: 0, title: "never"}]},
                        { question: "-	Would you love to change the life you living now", options: [{value: 6.7, title: "Yes"}, {value: 3.35, title: "Not sure"}, {value: 0, title: "No"}]},
                ]
        },
]


export const QApage = () => {


        const [total1, setTotal1] = useState<number>(0)
        const [total1a, setTotal1a] = useState<number>(0)
        const [total1b, setTotal1b] = useState<number>(0)
        const [total2, setTotal2] = useState<number>(0)
        const [total3, setTotal3] = useState<number>(0)
        const [total4, setTotal4] = useState<number>(0)
        const [total5, setTotal5] = useState<number>(0)


        const [question1State, setquestion1State] = useState<any>(0)
        const [question1bState, setquestion1bState] = useState<any>(0)
        const [question1cState, setquestion1cState] = useState<any>(0)

        const [question2State, setquestion2State] = useState<any>(0)
        const [question2bState, setquestion2bState] = useState<any>(0)
        const [question2cState, setquestion2cState] = useState<any>(0)

        const [question3State, setquestion3State] = useState<any>(0)
        const [question3bState, setquestion3bState] = useState<any>(0)
        const [question3cState, setquestion3cState] = useState<any>(0)

        const [question4State, setquestion4State] = useState<any>(0)
        const [question4bState, setquestion4bState] = useState<any>(0)
        const [question4cState, setquestion4cState] = useState<any>(0)

        const [question5State, setquestion5State] = useState<any>(0)
        const [question5bState, setquestion5bState] = useState<any>(0)
        const [question5cState, setquestion5cState] = useState<any>(0)

        const {setDataSetter} = useContext(QuestionDataContext)

        const navigate = useNavigate()

        const handleSubmit = () => {
                setDataSetter({
                                question1value: question1State + question1bState + question1cState,
                                question2value: question2State + question2bState + question2cState, 
                                question3value: question3State + question3bState + question3cState, 
                                question4value: question4State + question4bState + question4cState,
                                question5value: question5State + question5bState + question5cState
                        })

                navigate('/chart')
        }


        console.log("question1State")
        console.log(question1State)

        console.log("question1State")
        console.log(question1State)

        console.log("question1State")
        console.log(question1State)



        console.log("question1State")
        console.log(question1State)

        console.log("question1State")
        console.log(question1State)

        console.log("question1State")
        console.log(question1State)


        const [activeTotal1, setActiveTotal1] = useState(false)


        const handleClick = (val:number) => {
                setTotal1(total1 + val);
                setActiveTotal1(true)
        }

        const handleQuestionState = (val:string) => {
                // setquestion1State(val);
                // setActiveTotal1(true)
        }


        return (
                <div>
                        <div className='header_main'>
                                {question1State}
                        </div>
                        {/* <div>
                                <div>

                                        <h2>total1: {`${total1}`}</h2>
                                        <h2>total2: {`${total2}`}</h2>
                                        <h2>total3: {`${total3}`}</h2>
                                        <h2>total4: {`${total4}`}</h2>
                                        <h2>total5: {`${total5}`}</h2>

                                </div>

                        </div> */}

                        <div className='body_main'>

                                
                        <div>



                                {quiz.map((each, mainIndex) => (
                                        <div className='questions_main'>
                                                <h1 className="QApage_h1">{each.title}</h1>

                                                <div className="QApage_question_main">
                                                {each.questions.map((each, sub1index) => (
                                                        <>
                                                        
                                                                <div className="QApage_question">{each.question}</div>
                                                                {
                                                                        mainIndex === 0 
                                                                        ?
                                                                        (
                                                                                <div className="QApage_options">
                                                                                        {
                                                                                                each.options.map(
                                                                                                        (each, sub2Index) => (
                                                                                                                

                                                                                                        <div className="QApage_options_adjust">
                                                                                                                
                                                                                                                {
                                                                                                                        sub1index === 0
                                                                                                                        && 
                                                                                                                        (
                                                                                                                                <>
                                                                                                                                {/* <button className={`button accept-btn ${  question1State === each.title &&  'accept-btn-active'}`} onClick={() => question1State(each.value) }> */}
                                                                                                                                <button className={`button accept-btn`} onClick={() => setquestion1State(each.value) }>
                                                                                                                                        {each.title}
                                                                                                                                </button>
                                                                                                                                </>
                                                                                                                        )
                                                                                                                        
                                                                                                                }
                                                                                                                {
                                                                                                                        sub1index === 1
                                                                                                                        && 
                                                                                                                        (
                                                                                                                                <>
                                                                                                                                {/* <button className={`button accept-btn ${  question1State === each.title &&  'accept-btn-active'}`} onClick={() => question1State(each.value) }> */}
                                                                                                                                <button className={`button accept-btn`} onClick={() => setquestion1bState(each.value) }>
                                                                                                                                        {each.title}
                                                                                                                                </button>
                                                                                                                                </>
                                                                                                                        )
                                                                                                                        
                                                                                                                }
                                                                                                                {
                                                                                                                        sub1index === 2
                                                                                                                        && 
                                                                                                                        (
                                                                                                                                <>
                                                                                                                                {/* <button className={`button accept-btn ${  question1State === each.title &&  'accept-btn-active'}`} onClick={() => question1State(each.value) }> */}
                                                                                                                                <button className={`button accept-btn`} onClick={() => setquestion1cState(each.value) }>
                                                                                                                                        {each.title}
                                                                                                                                </button>
                                                                                                                                </>
                                                                                                                        ) 
                                                                                                                }

                                                                                                        </div>

                                                                                                        )
                                                                                                )
                                                                                        }
                                                                                </div>
                                                                        
                                                                        )  
                                                                        :
                                                                        mainIndex === 1
                                                                        ?
                                                                        (
                                                                                
                                                                                <div className="QApage_options">
                                                                                        {
                                                                                                each.options.map(
                                                                                                        (each, subIndex) => (
                                                                                                                

                                                                                                                <div className="QApage_options_adjust">
                                                                                                                
                                                                                                                {
                                                                                                                        sub1index === 0
                                                                                                                        && 
                                                                                                                        (
                                                                                                                                <>
                                                                                                                                {/* <button className={`button accept-btn ${  question1State === each.title &&  'accept-btn-active'}`} onClick={() => question1State(each.value) }> */}
                                                                                                                                <button className={`button accept-btn`} onClick={() => setquestion2State(each.value) }>
                                                                                                                                        {each.title}
                                                                                                                                </button>
                                                                                                                                </>
                                                                                                                        )
                                                                                                                        
                                                                                                                }
                                                                                                                {
                                                                                                                        sub1index === 1
                                                                                                                        && 
                                                                                                                        (
                                                                                                                                <>
                                                                                                                                {/* <button className={`button accept-btn ${  question1State === each.title &&  'accept-btn-active'}`} onClick={() => question1State(each.value) }> */}
                                                                                                                                <button className={`button accept-btn`} onClick={() => setquestion2bState(each.value) }>
                                                                                                                                        {each.title}
                                                                                                                                </button>
                                                                                                                                </>
                                                                                                                        )
                                                                                                                        
                                                                                                                }
                                                                                                                {
                                                                                                                        sub1index === 2
                                                                                                                        && 
                                                                                                                        (
                                                                                                                                <>
                                                                                                                                {/* <button className={`button accept-btn ${  question1State === each.title &&  'accept-btn-active'}`} onClick={() => question1State(each.value) }> */}
                                                                                                                                <button className={`button accept-btn`} onClick={() => setquestion2cState(each.value) }>
                                                                                                                                        {each.title}
                                                                                                                                </button>
                                                                                                                                </>
                                                                                                                        ) 
                                                                                                                }

                                                                                                        </div>

                                                                                                        )
                                                                                                )
                                                                                        }
                                                                                </div>
                                                                        )
                                                                        : 
                                                                        mainIndex === 2
                                                                        ?
                                                                        (
                                                                                <div className="QApage_options">
                                                                                        {
                                                                                                each.options.map(
                                                                                                        (each, subIndex) => (
                                                                                                                

                                                                                                                <div className="QApage_options_adjust">
                                                                                                                
                                                                                                                {
                                                                                                                        sub1index === 0
                                                                                                                        && 
                                                                                                                        (
                                                                                                                                <>
                                                                                                                                {/* <button className={`button accept-btn ${  question1State === each.title &&  'accept-btn-active'}`} onClick={() => question1State(each.value) }> */}
                                                                                                                                <button className={`button accept-btn`} onClick={() => setquestion3State(each.value) }>
                                                                                                                                        {each.title}
                                                                                                                                </button>
                                                                                                                                </>
                                                                                                                        )
                                                                                                                        
                                                                                                                }
                                                                                                                {
                                                                                                                        sub1index === 1
                                                                                                                        && 
                                                                                                                        (
                                                                                                                                <>
                                                                                                                                {/* <button className={`button accept-btn ${  question1State === each.title &&  'accept-btn-active'}`} onClick={() => question1State(each.value) }> */}
                                                                                                                                <button className={`button accept-btn`} onClick={() => setquestion3bState(each.value) }>
                                                                                                                                        {each.title}
                                                                                                                                </button>
                                                                                                                                </>
                                                                                                                        )
                                                                                                                        
                                                                                                                }
                                                                                                                {
                                                                                                                        sub1index === 2
                                                                                                                        && 
                                                                                                                        (
                                                                                                                                <>
                                                                                                                                {/* <button className={`button accept-btn ${  question1State === each.title &&  'accept-btn-active'}`} onClick={() => question1State(each.value) }> */}
                                                                                                                                <button className={`button accept-btn`} onClick={() => setquestion3cState(each.value) }>
                                                                                                                                        {each.title}
                                                                                                                                </button>
                                                                                                                                </>
                                                                                                                        ) 
                                                                                                                }

                                                                                                        </div>

                                                                                                        )
                                                                                                )
                                                                                        }
                                                                                </div>
                                                                        )
                                                                        : 
                                                                        mainIndex === 3
                                                                        ?
                                                                        (
                                                                                
                                                                                <div className="QApage_options">
                                                                                        {
                                                                                                each.options.map(
                                                                                                        (each, subIndex) => (
                                                                                                                

                                                                                                                <div className="QApage_options_adjust">
                                                                                                                
                                                                                                                {
                                                                                                                        sub1index === 0
                                                                                                                        && 
                                                                                                                        (
                                                                                                                                <>
                                                                                                                                {/* <button className={`button accept-btn ${  question1State === each.title &&  'accept-btn-active'}`} onClick={() => question1State(each.value) }> */}
                                                                                                                                <button className={`button accept-btn`} onClick={() => setquestion4State(each.value) }>
                                                                                                                                        {each.title}
                                                                                                                                </button>
                                                                                                                                </>
                                                                                                                        )
                                                                                                                        
                                                                                                                }
                                                                                                                {
                                                                                                                        sub1index === 1
                                                                                                                        && 
                                                                                                                        (
                                                                                                                                <>
                                                                                                                                {/* <button className={`button accept-btn ${  question1State === each.title &&  'accept-btn-active'}`} onClick={() => question1State(each.value) }> */}
                                                                                                                                <button className={`button accept-btn`} onClick={() => setquestion4bState(each.value) }>
                                                                                                                                        {each.title}
                                                                                                                                </button>
                                                                                                                                </>
                                                                                                                        )
                                                                                                                        
                                                                                                                }
                                                                                                                {
                                                                                                                        sub1index === 2
                                                                                                                        && 
                                                                                                                        (
                                                                                                                                <>
                                                                                                                                {/* <button className={`button accept-btn ${  question1State === each.title &&  'accept-btn-active'}`} onClick={() => question1State(each.value) }> */}
                                                                                                                                <button className={`button accept-btn`} onClick={() => setquestion4cState(each.value) }>
                                                                                                                                        {each.title}
                                                                                                                                </button>
                                                                                                                                </>
                                                                                                                        ) 
                                                                                                                }

                                                                                                        </div>

                                                                                                        )
                                                                                                )
                                                                                        }
                                                                                </div>
                                                                        )
                                                                        :
                                                                        (
                                                                                
                                                                                <div className="QApage_options">
                                                                                        {
                                                                                                each.options.map(
                                                                                                        (each, subIndex) => (
                                                                                                                

                                                                                                                <div className="QApage_options_adjust">
                                                                                                                
                                                                                                                {
                                                                                                                        sub1index === 0
                                                                                                                        && 
                                                                                                                        (
                                                                                                                                <>
                                                                                                                                {/* <button className={`button accept-btn ${  question1State === each.title &&  'accept-btn-active'}`} onClick={() => question1State(each.value) }> */}
                                                                                                                                <button className={`button accept-btn`} onClick={() => setquestion5State(each.value) }>
                                                                                                                                        {each.title}
                                                                                                                                </button>
                                                                                                                                </>
                                                                                                                        )
                                                                                                                        
                                                                                                                }
                                                                                                                {
                                                                                                                        sub1index === 1
                                                                                                                        && 
                                                                                                                        (
                                                                                                                                <>
                                                                                                                                {/* <button className={`button accept-btn ${  question1State === each.title &&  'accept-btn-active'}`} onClick={() => question1State(each.value) }> */}
                                                                                                                                <button className={`button accept-btn`} onClick={() => setquestion5bState(each.value) }>
                                                                                                                                        {each.title}
                                                                                                                                </button>
                                                                                                                                </>
                                                                                                                        )
                                                                                                                        
                                                                                                                }
                                                                                                                {
                                                                                                                        sub1index === 2
                                                                                                                        && 
                                                                                                                        (
                                                                                                                                <>
                                                                                                                                {/* <button className={`button accept-btn ${  question1State === each.title &&  'accept-btn-active'}`} onClick={() => question1State(each.value) }> */}
                                                                                                                                <button className={`button accept-btn`} onClick={() => setquestion5cState(each.value) }>
                                                                                                                                        {each.title}
                                                                                                                                </button>
                                                                                                                                </>
                                                                                                                        ) 
                                                                                                                }

                                                                                                        </div>

                                                                                                        )
                                                                                                )
                                                                                        }
                                                                                </div>
                                                                        )

                                                                }
                                                                
                                                        </>
                                                ))}
                                                </div>
                                        </div>
                                ))}
                        </div>

                        
                        <div>
                                <div className="QApage_h2_main">
                                        <h2>Persistent depressed (low) mood: {`${question1State + question1bState + question1cState}`}</h2>
                                        <h2>Loss of interest in things you once enjoyed: {`${question2State + question2bState + question2cState}`}</h2>
                                        <h2>Feeling of worthlessness: {`${question3State + question3bState + question3cState}`}</h2>
                                        <h2>Poor concentration: {`${question4State + question4bState + question4cState}`}</h2>
                                        <h2>Thought of harming yourself.: {`${question5State + question5bState + question5cState}`}</h2>

                                </div>

                        </div>

                        <div className='QApage_submit_button_div'>
                                
                                        <button className='QApage_submit_button' onClick={() => handleSubmit()}>SUBMIT</button>
                        
                        </div>

                        
                        </div>
                        
                </div>
        )
}